[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Kubernetes Engine Cluster Manager API: Node.js Client](https://github.com/googleapis/nodejs-cloud-container)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/container.svg)](https://www.npmjs.org/package/@google-cloud/container)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-cloud-container/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-cloud-container)




> Node.js idiomatic client for [Kubernetes Engine][product-docs] cluster management.

[Kubernetes Engine](https://cloud.google.com/kubernetes-engine/docs/) is used for
building and managing container based applications, powered by the open source Kubernetes technology.


* [Kubernetes Engine Cluster Manager API Node.js Client API Reference][client-docs]
* [Kubernetes Engine Cluster Manager API Documentation][product-docs]
* [github.com/googleapis/nodejs-cloud-container](https://github.com/googleapis/nodejs-cloud-container)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Kubernetes Engine Cluster Manager API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/container
```


### Using the client library

```javascript
  const container = require('@google-cloud/container');

  // Create the Cluster Manager Client
  const client = new container.v1.ClusterManagerClient();

  async function quickstart() {
    const zone = 'us-central1-a';
    const projectId = await client.getProjectId();
    const request = {
      projectId: projectId,
      zone: zone,
    };

    const [response] = await client.listClusters(request);
    console.log('Clusters:');
    console.log(response);
  }
  quickstart();

```

## Relationship to Kubernetes

`@google-cloud/container` provides a high level API for creating and managing
[Google Kubernetes Engine](https://cloud.google.com/gke) clusters on Google Cloud.

To run commands against the clusters created, you will need to use the
[Kubernetes API](https://kubernetes.io/docs/reference/using-api/api-overview/)
(and the associated kubectl command-line interface).


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-cloud-container/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-cloud-container/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-cloud-container&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Kubernetes Engine Cluster Manager API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.




More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-cloud-container/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-cloud-container/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/container/latest
[product-docs]: https://cloud.google.com/kubernetes-engine
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=container.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
