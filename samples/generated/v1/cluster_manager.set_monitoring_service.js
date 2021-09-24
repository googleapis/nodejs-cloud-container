// Copyright 2021 Google LLC
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

function main(monitoringService) {
  // [START container_v1_generated_ClusterManager_SetMonitoringService_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Deprecated. The Google Developers Console [project ID or project
   *  number](https://support.google.com/cloud/answer/6158840).
   *  This field has been deprecated and replaced by the name field.
   */
  // const projectId = 'abc123'
  /**
   *  Deprecated. The name of the Google Compute Engine
   *  [zone](https://cloud.google.com/compute/docs/zones#available) in which the
   *  cluster resides. This field has been deprecated and replaced by the name
   *  field.
   */
  // const zone = 'abc123'
  /**
   *  Deprecated. The name of the cluster to upgrade.
   *  This field has been deprecated and replaced by the name field.
   */
  // const clusterId = 'abc123'
  /**
   *  Required. The monitoring service the cluster should use to write metrics.
   *  Currently available options:
   *  * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring
   *  service with a Kubernetes-native resource model
   *  * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no
   *    longer available as of GKE 1.15).
   *  * `none` - No metrics will be exported from the cluster.
   *  If left as an empty string,`monitoring.googleapis.com/kubernetes` will be
   *  used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
   */
  // const monitoringService = 'abc123'
  /**
   *  The name (project, location, cluster) of the cluster to set monitoring.
   *  Specified in the format `projects/* /locations/* /clusters/*`.
   */
  // const name = 'abc123'

  // Imports the Container library
  const {ClusterManagerClient} = require('@google-cloud/container').v1;

  // Instantiates a client
  const containerClient = new ClusterManagerClient();

  async function setMonitoringService() {
    // Construct request
    const request = {
      monitoringService,
    };

    // Run request
    const response = await containerClient.setMonitoringService(request);
    console.log(response);
  }

  setMonitoringService();
  // [END container_v1_generated_ClusterManager_SetMonitoringService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
