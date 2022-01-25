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

function main(nodeVersion, imageType) {
  // [START container_v1_generated_ClusterManager_UpdateNodePool_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Kubernetes version to change the nodes to (typically an
   *  upgrade).
   *  Users may specify either explicit versions offered by Kubernetes Engine or
   *  version aliases, which have the following behavior:
   *  - "latest": picks the highest valid Kubernetes version
   *  - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
   *  - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
   *  - "1.X.Y-gke.N": picks an explicit Kubernetes version
   *  - "-": picks the Kubernetes master version
   */
  // const nodeVersion = 'abc123'
  /**
   *  Required. The desired image type for the node pool.
   */
  // const imageType = 'abc123'
  /**
   *  The name (project, location, cluster, node pool) of the node pool to
   *  update. Specified in the format
   *  `projects/* /locations/* /clusters/* /nodePools/*`.
   */
  // const name = 'abc123'
  /**
   *  The desired list of Google Compute Engine
   *  zones (https://cloud.google.com/compute/docs/zones#available) in which the
   *  node pool's nodes should be located. Changing the locations for a node pool
   *  will result in nodes being either created or removed from the node pool,
   *  depending on whether locations are being added or removed.
   */
  // const locations = 'abc123'
  /**
   *  The desired workload metadata config for the node pool.
   */
  // const workloadMetadataConfig = {}
  /**
   *  Upgrade settings control disruption and speed of the upgrade.
   */
  // const upgradeSettings = {}
  /**
   *  Parameters that can be configured on Linux nodes.
   */
  // const linuxNodeConfig = {}
  /**
   *  Node kubelet configs.
   */
  // const kubeletConfig = {}
  /**
   *  GCFS config.
   */
  // const gcfsConfig = {}
  /**
   *  Enable or disable gvnic on the node pool.
   */
  // const gvnic = {}

  // Imports the Container library
  const {ClusterManagerClient} = require('@google-cloud/container').v1;

  // Instantiates a client
  const containerClient = new ClusterManagerClient();

  async function callUpdateNodePool() {
    // Construct request
    const request = {
      nodeVersion,
      imageType,
    };

    // Run request
    const response = await containerClient.updateNodePool(request);
    console.log(response);
  }

  callUpdateNodePool();
  // [END container_v1_generated_ClusterManager_UpdateNodePool_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
