/**
 * @fileoverview Automating manual steps to setup a new nodejs Google Cloud
 * module.
 */

const fs = require('fs');
const util = require('util');
const child_process = require('child_process');
const https = require('https');

const lstat = util.promisify(fs.lstat);
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);
const mkdir = util.promisify(fs.mkdir);
const exec = util.promisify(child_process.exec);

const logFile = './package-setup.log';

// CircleCi configuration: we get sample yaml from nodejs-language and replace
// package name everywhere. TODO: would be much better if we just generate it.
const circleConfigSampleUri = 'https://raw.githubusercontent.com/googleapis/nodejs-language/master/.circleci/config.yml';
const circleSubstitute = (yml, apiName) => yml.replace(/language/g, apiName);

// AppVeyor configuration: we get sample yaml from nodejs-language, no changes
// are needed
const appveyorConfigSampleUri = 'https://raw.githubusercontent.com/googleapis/nodejs-language/master/.appveyor.yml';

async function readJson(filename)
{
  let content = await readFile(filename, 'utf-8');
  return JSON.parse(content);
}

async function writeJson(filename, json)
{
  await writeFile(filename, JSON.stringify(json, null, '  ') + "\n");
}

async function getApiName()
{
  let packageJson = await readJson('package.json');
  let apiName = packageJson['name'].replace(/^@google-cloud\//, '');
  return apiName;
}

async function logExec(command)
{
  console.log("Executing", command);
  let result = await exec(command);
  await appendFile(logFile, ">>> " + command + "\nstdout:\n" + result.stdout + "\nstderr:\n" + result.stderr + "\n");
  return result;
}

async function prepare()
{
  console.log(">> prepare");
  await logExec('npm install');
}

async function addRepoTools()
{
  console.log(">> addRepoTools");
  await logExec('npm install --save-dev @google-cloud/nodejs-repo-tools');
  let packageJson = await readJson('package.json');
  packageJson['scripts']['generate-scaffolding'] = "repo-tools generate all";
  packageJson['scripts']['generate-scaffolding-samples'] = 
      "repo-tools generate lib_samples_readme -l samples/ --config ../.cloud-repo-tools.json";
  lstat('protos')
      .then(protos => {
        if (protos.isDirectory()) {
          if (!packageJson['files'].includes('protos')) {
            packageJson['files'].push('protos');
          }
        }
      })
      .catch(() => {}); // no protos, not an error
  await writeJson('package.json', packageJson);

  let api = await getApiName();
  let cloudRepoToolsConfig;
  let configFromFile = await readJson('.cloud-repo-tools.json')
      .catch(() => {
        cloudRepoToolsConfig = {
            "requiresKeyFile": true,
            "requiresProjectId": true,
            "product": api,
            "client_reference_url": `https://cloud.google.com/nodejs/docs/reference/${api}/latest/`,
            "release_quality": 'alpha'
        };
      });
  if (configFromFile !== undefined) {
    cloudRepoToolsConfig = configFromFile;
  }

  let files;
  if (cloudRepoToolsConfig['samples'] === undefined) {
    files = await readdir('samples')
        .catch(() => {});
    if (files === undefined) {
      files = [];
    }
    samples = [];
    for (let sampleFile of files) {
      if (!sampleFile.match(/\.js$/)) {
        continue;
      }
      sampleName = sampleFile.replace(/\.js/, '');
      if (sampleName === 'quickstart') {
        continue;
      }
      samples.push({
          "id": sampleName,
          "name": sampleName,
          "file": sampleFile,
          "docs_link": "TBD",
          "usage": `node ${sampleFile} --help`
      });
    }
    if (samples.length > 0) {
      cloudRepoToolsConfig['samples'] = samples;
    }
  }
  await writeJson('.cloud-repo-tools.json', cloudRepoToolsConfig);

  await logExec("npm install");
  await logExec("npm link ./");

  // check if cloud repo tools know the product we are going to setup
  const knownProducts = require('./node_modules/@google-cloud/nodejs-repo-tools/src/utils/products.js');
  let productName = packageJson['name'];
  if (knownProducts[productName] === undefined) {
    console.log(`
ERROR: Product name defined in package.json is ${productName},
but this product is unknown to nodejs-repo-tools. Check the following file:
https://github.com/GoogleCloudPlatform/nodejs-repo-tools/blob/master/src/utils/products.js
If names do not match, automatic scaffolding will not be possible.
If you want to override it, you can add overriding keys to .cloud-repo-tools.json
(see example here: https://github.com/googleapis/nodejs-common/blob/master/.cloud-repo-tools.json)
and restart the script.
`);
    throw "Unknown package"
  }

  await logExec("npm run generate-scaffolding");
}

async function setupLintPrettier()
{
  console.log(">> setupLintPrettier");
  await logExec('npm install --save-dev eslint eslint-config-prettier eslint-plugin-node eslint-plugin-prettier prettier');

  console.log("Updating scripts in package.json");
  let packageJson = await readJson('package.json');
  packageJson['scripts']['lint'] = "repo-tools lint --cmd eslint -- src/ samples/ system-test/ test/";
  packageJson['scripts']['prettier'] =
      "repo-tools exec -- prettier --write src/*.js src/*/*.js samples/*.js samples/*/*.js test/*.js test/*/*.js system-test/*.js system-test/*/*.js";
  await writeJson('package.json', packageJson);
}

async function setupUnitTests()
{
  console.log(">> setupUnitTests");
  await logExec('npm install --save-dev async codecov extend intelli-espower-loader mocha nyc power-assert');

  console.log("Updating scripts in package.json");
  let packageJson = await readJson('package.json');
  packageJson['scripts']['cover'] = "nyc --reporter=lcov mocha --require intelli-espower-loader test/*.js && nyc report";
  packageJson['scripts']['samples-test'] = "cd samples/ && npm link ../ && npm test && cd ../";
  packageJson['scripts']['test-no-cover'] = "repo-tools test run --cmd mocha -- test/*.js --no-timeouts";
  packageJson['scripts']['test'] = "repo-tools test run --cmd npm -- run cover";
  await writeJson('package.json', packageJson);
}

async function setupJsDoc()
{
  console.log(">> setupJsDoc");
  logExec("npm install --save-dev jsdoc ink-docstrap");
  let packageJson = await readJson('package.json');
  packageJson['scripts']['docs'] = "repo-tools exec -- jsdoc -c .jsdoc.js";
  await writeJson('package.json', packageJson);
}

async function httpsGet(uri)
{
  return new Promise((fulfill, reject) => {
    https.get(uri, result => {
      result.setEncoding("utf8");
      let body = "";
      result.on("data", data => {
        body += data;
      });
      result.on("end", () => {
        fulfill(body);
      });
    })
    .on("error", reject);
  });
}

async function setupCircle()
{
  console.log(">> setupCircle");
  let apiName = await getApiName();
  let circleSample = await httpsGet(circleConfigSampleUri);
  let circleSubstituted = circleSubstitute(circleSample, apiName);
  await mkdir('.circleci').catch(() => {});
  await writeFile('.circleci/config.yml', circleSubstituted);
}

async function setupSystemTests()
{
  console.log(">> setupSystemTests");
  let packageJson = await readJson('package.json');
  packageJson['scripts']['system-test'] = "repo-tools test run --cmd mocha -- system-test/*.js --no-timeouts";
  await writeJson('package.json', packageJson);
}

async function setupSamplesTests()
{
  console.log(">> setupSamplesTests");
  let samplesExist = true;
  let stat = await lstat('samples/package.json').catch(() => { samplesExist = false; });
  if (!samplesExist) {
    return;
  }

  logExec("cd samples && npm install --save-dev ava nyc");
  let samplesPackageJson = await readJson('samples/package.json');
  samplesPackageJson['scripts']['ava'] = "ava -T 20s --verbose test/*.test.js system-test/*.test.js";
  samplesPackageJson['scripts']['cover'] = "nyc --reporter=lcov --cache ava -T 20s --verbose test/*.test.js system-test/*.test.js && nyc report";
  samplesPackageJson['scripts']['test'] = "repo-tools test run --cmd npm -- run cover";
  await writeJson('samples/package.json', samplesPackageJson);
}

async function setupAppveyor()
{
  console.log(">> setupAppveyor");
  let appveyorSample = await httpsGet(appveyorConfigSampleUri);
  await writeFile('.appveyor.yml', appveyorSample);
}

function manualSteps()
{
  console.log(`
Manual steps required:
- git add all new files
- run "npm run prettier"
- make sure "npm run lint" passes
- make sure "npm test" passes
- commit all changes
`);
}

async function main()
{
//  await prepare();
//  await addRepoTools();
  await setupUnitTests();
  await setupLintPrettier();
  await setupJsDoc();
  await setupCircle();
  await setupSystemTests();
  await setupSamplesTests();
  await setupAppveyor();
  manualSteps();
}

main();
