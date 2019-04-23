[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Kubernetes Engine: Node.js Cluster Manager](https://github.com/googleapis/nodejs-cloud-container)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/container.svg)](https://www.npmjs.org/package/@google-cloud/container)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-cloud-container/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-cloud-container)

> Node.js idiomatic client for [Kubernetes Engine][product-docs] cluster management.

[Kubernetes Engine](https://cloud.google.com/kubernetes-engine/docs/) is used for building and managing container based applications, powered by the open source Kubernetes technology.


* [Kubernetes Engine Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-cloud-container](https://github.com/googleapis/nodejs-cloud-container)
* [Kubernetes Engine Documentation][product-docs]

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  Select or create a Cloud Platform project.

    [Go to the projects page][projects]

1.  Enable billing for your project.

    [Enable billing][billing]

1.  Enable the Google Kubernetes Engine API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=container.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/container

### Using the client library

```javascript
const container = require('@google-cloud/container');

if (
  !process.env.GCLOUD_PROJECT ||
  !process.env.GOOGLE_APPLICATION_CREDENTIALS
) {
  throw new Error(
    'Usage: GCLOUD_PROJECT=<project_id> GOOGLE_APPLICATION_CREDENTIALS=<path to key json file> node #{$0}'
  );
}

const client = new container.v1.ClusterManagerClient({
  // optional auth parameters.
});

const projectId = process.env.GCLOUD_PROJECT;
const zone = 'us-central1-a';
const request = {
  projectId: projectId,
  zone: zone,
};

client
  .listClusters(request)
  .then(responses => {
    const response = responses[0];
    console.log(response);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
```


The [Kubernetes Engine Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-cloud-container/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-cloud-container/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/container/latest/
[product-docs]: https://cloud.google.com/kubernetes-engine/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png

