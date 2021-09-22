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
  // [START container_list_usable_subnetworks_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The parent project where subnetworks are usable.
   *  Specified in the format `projects/*`.
   */
  // const parent = 'abc123'
  /**
   *  Filtering currently only supports equality on the networkProjectId and must
   *  be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId`
   *  is the project which owns the listed subnetworks. This defaults to the
   *  parent project ID.
   */
  // const filter = 'abc123'
  /**
   *  The max number of results per page that should be returned. If the number
   *  of available results is larger than `page_size`, a `next_page_token` is
   *  returned which can be used to get the next page of results in subsequent
   *  requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
   */
  // const pageSize = 1234
  /**
   *  Specifies a page token to use. Set this to the nextPageToken returned by
   *  previous list requests to get the next page of results.
   */
  // const pageToken = 'abc123'

  // Imports the Container library
  const {ClusterManagerClient} = require('@google-cloud/container').v1;

  // Instantiates a client
  const containerClient = new ClusterManagerClient();

  async function listUsableSubnetworks() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await containerClient.listUsableSubnetworksAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listUsableSubnetworks();
  // [END container_list_usable_subnetworks_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
