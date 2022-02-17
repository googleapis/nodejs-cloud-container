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

/**
 * Entrypoint into the sample. Expects two arguments to the program.
 * 1. The name of the GKE cluster to be deleted
 * 2. The GCP Zone of the cluster to be deleted
 *
 * > node delete_cluster.js <CLUSTER_NAME> <GCP_ZONE>
 */
async function main(
  clusterName = 'Name to be given to the GKE cluster',
  clusterZone = 'Location where the cluster is to be created'
) {
  // [START gke_delete_cluster]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const clusterName = 'sample-gke-cluster';
  // const clusterZone = 'us-central1-c';

  // load the google-cloud nodejs library for GKE
  const container = require('@google-cloud/container');
  // assign the operation status enum to a variable for easy access
  const STATUS_ENUM = container.protos.google.container.v1.Operation.Status;
  // define fib(0) for the fibonacci series we use for delay calculation
  let prevFibonacciDelay = 0;

  /**
   * This function calls the `getOperation` API to fetch the details of a specific
   * operation and checks for its completion. It returns the defined function
   * wrapped in a Promise. The function it defines takes in a google cloud client
   * along with the unique identifier of the operation we want to check.
   *
   * The response to the defined function is a 'Promise.reject' if the operation
   * is still not complete and a 'Promise.resolve' if it is complete.
   *
   * @param {container.vq.ClusterManagerClient} client the google cloud API client used to submit the request
   * @param {string} opId the unique identifier of the operation we want to check
   * @returns a Promise that wraps the status check function
   */
  const checkOpStatus = (client, opId) => {
    const getOpFn = async (resolve, reject) => {
      const [longRunningOp] = await client.getOperation({name: opId});
      const DONE = STATUS_ENUM[STATUS_ENUM.DONE];
      if (longRunningOp.status === DONE) {
        resolve('Cluster deletion completed.');
      } else {
        reject('Cluster deletion not complete.');
      }
    };
    return new Promise(getOpFn);
  };

  /**
   * This method calls the Promise function (`checkOpStatus()`) to check the
   * status of an operation and schedules a retry if the operation is still not
   * completed. The retry delay is modelled as a fibonacci sequence.
   *
   * @param {container.v1.ClusterManagerClient} client the google cloud API client used to submit the request
   * @param {string} opId the unique identifier of the operation we want to check
   * @param {number} delay the delay with which the next retry is to be scheduled
   * @param {number} maxtries maximum number of retry attempts to go before giving up
   * @param {number} retryCount the current number of retried attempted
   */
  function checkStatusWithRetry(client, opId, delay, maxtries, retryCount = 1) {
    checkOpStatus(client, opId)
      .then(status => {
        // success scenario
        console.log(status);
      })
      .catch(status => {
        // fail (not yet complete) scenario
        if (retryCount < maxtries) {
          console.log(`${status} will try after ${delay / 1000}s delay...`);
          const newDelay = getFibonacciDelay(delay);
          setTimeout(
            () =>
              checkStatusWithRetry(
                client,
                opId,
                newDelay,
                maxtries,
                retryCount + 1
              ),
            delay
          );
        } else {
          console.log(`${status} max retries reached, giving up.`);
        }
      });
  }

  /**
   * A simple function that returns the next number in a fibonacci sequence that
   * has the given argument as f(n-1) and the global variable `prevFibonacciDelay`
   * as f(n - 2). This function is used to simulate a fibonacci sequence for the
   * backing off (delay) time used when retrying.
   *
   * @param {number} delay the previous delay in the sequence
   * @returns the next delay before retrying
   */
  function getFibonacciDelay(delay) {
    const newDelay = prevFibonacciDelay + delay;
    prevFibonacciDelay = delay;
    return newDelay;
  }

  /**
   * This method deletes the GKE cluster pointed to by `clusterName` which is
   * in the zone indicated by `clusterZone`.
   */
  async function deleteCluster() {
    // Create the Cluster Manager Client
    const client = new container.v1.ClusterManagerClient();
    const gcpProject = await client.getProjectId();
    const clusterLocation = `projects/${gcpProject}/locations/${clusterZone}`;
    const request = {name: `${clusterLocation}/clusters/${clusterName}`};
    // invoke the delete cluster API using the client
    const [deleteOperation] = await client.deleteCluster(request);
    // extract the unique identifier of the operation to checkback status
    const opIdentifier = `${clusterLocation}/operations/${deleteOperation.name}`;
    // initial delay before retry in milli seconds
    const retryDelay = 1000;
    // maximum number of times to check for operation completion before giving up
    const maxRetryCount = 20;
    // schedule polling to check if the deletion operation is completed
    checkStatusWithRetry(client, opIdentifier, retryDelay, maxRetryCount);
  }

  // Delete the GKE cluster
  deleteCluster();
  // [END gke_delete_cluster]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

// program starts here
main(...process.argv.slice(2));
