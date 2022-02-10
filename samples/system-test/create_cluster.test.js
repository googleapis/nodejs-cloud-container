// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert, expect} = require('chai');
const {describe, it, after} = require('mocha');
const {randomUUID} = require('crypto');
const container = require('@google-cloud/container');
const cp = require('child_process');
const STATUS_ENUM = container.protos.google.container.v1.Operation.Status;

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('container samples - create cluster long running op', async () => {
  const zones = [
    'us-central1-a',
    'us-central1-b',
    'us-central1-c',
    'us-central1-f',
  ];
  const randomZone = zones[Math.floor(Math.random() * zones.length)];
  const randomClusterName = `nodejs-container-test-${randomUUID().substring(
    0,
    8
  )}`;
  const client = new container.v1.ClusterManagerClient();
  const projectId = await client.getProjectId();
  const clusterLocation = `projects/${projectId}/locations/${randomZone}`;

  // clean up the cluster regardless of whether the test passed or not
  after(async () => {
    const request = {name: `${clusterLocation}/clusters/${randomClusterName}`};
    const [deleteOperation] = await client.deleteCluster(request);
    const opIdentifier = `${clusterLocation}/operations/${deleteOperation.name}`;

    const maxRetries = 20;
    let retryCount = 0;
    let prevDelay = 0;
    let currDelay = 1000;

    async function timeOutFn() {
      if (retryCount >= maxRetries) {
        return;
      }
      const [longRunningOp] = await client.getOperation({name: opIdentifier});
      const status = longRunningOp.status;
      if (status !== STATUS_ENUM[STATUS_ENUM.DONE]) {
        const newDelay = prevDelay + currDelay;
        prevDelay = currDelay;
        currDelay = newDelay;
        setTimeout(timeOutFn, currDelay);
      }
      retryCount += 1;
    }
    timeOutFn();
  });

  it('should create cluster and wait for completion', async () => {
    const stdout = execSync(
      `node create_cluster.js --zone=${randomZone} --name=${randomClusterName}`
    );
    assert.match(
      stdout,
      /Cluster creation not complete. will try after .* delay/
    );
    assert.match(stdout, /Cluster creation completed./);

    const [response] = await client.listClusters({
      projectId: projectId,
      zone: randomZone,
    });
    const clustersList = response.clusters.reduce(
      (acc, curr) => [curr.name, ...acc],
      []
    );
    expect(clustersList).to.include(randomClusterName);
  }).timeout(1000000);
});
