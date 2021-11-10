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

function main() {
  // [START container_v1_generated_ClusterManager_GetJSONWebKeys_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The cluster (project, location, cluster id) to get keys for. Specified in
   *  the format `projects/* /locations/* /clusters/*`.
   */
  // const parent = 'abc123'

  // Imports the Container library
  const {ClusterManagerClient} = require('@google-cloud/container').v1;

  // Instantiates a client
  const containerClient = new ClusterManagerClient();

  async function callGetJSONWebKeys() {
    // Construct request
    const request = {};

    // Run request
    const response = await containerClient.getJSONWebKeys(request);
    console.log(response);
  }

  callGetJSONWebKeys();
  // [END container_v1_generated_ClusterManager_GetJSONWebKeys_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
