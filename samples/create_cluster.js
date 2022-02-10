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

// [START gke_create_cluster]

// load the google-cloud nodejs library for GKE
const container = require('@google-cloud/container');
const args = require('yargs').argv;
const { exit } = require('process');

// assign the operation status enum to a variable for easy access
const STATUS_ENUM = container.protos.google.container.v1.Operation.Status;
let prevFibonacciDelay = 0;

/**
 * This function define a function that calls the `getOperation` API to fetch
 * the details of a specific operation and checks for its completion. It returns
 * the defined function wrapped in a Promise. The function it defines takes in a
 * google cloud client along with the unique identifier of the operation we want
 * to check.
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
        const [longRunningOp] = await client.getOperation({ name: opId });
        const DONE = STATUS_ENUM[STATUS_ENUM.DONE];
        if (longRunningOp.status === DONE) {
            resolve('Cluster creation completed.');
        } else {
            reject('Cluster creation not complete.');
        }
    };
    return new Promise(getOpFn);
};

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
 * This method creates a GKE cluster using the given client in the GCP project
 * and zone indicated by the `gcpProject` and `gcpZone` parameters. The last
 * argment is used as the name given to the newly created cluster.
 *
 * @param {container.v1.ClusterManagerClient} client the google cloud API client used to submit the request
 * @param {string} gcpProject the GCP project where the cluster is to be created
 * @param {string} gcpZone the GCP zone where the cluster is to be created
 * @param {string} clusterName the name to be given to the new cluster
 */
async function createCluster(gcpZone, clusterName) {
    // Create the Cluster Manager Client
    const client = new container.v1.ClusterManagerClient();
    const gcpProject = await client.getProjectId();
    const clusterLocation = `projects/${gcpProject}/locations/${gcpZone}`;
    const request = {
        parent: clusterLocation,
        cluster: {
            name: clusterName,
            initialNodeCount: 2,
            nodeConfig: {
                machineType: 'e2-standard-2',
            },
        },
    };
    // invoke the create cluster API using the client
    const [createOperation] = await client.createCluster(request);
    // extract the unique identifier of the operation to checkback status
    const opIdentifier = `${clusterLocation}/operations/${createOperation.name}`;
    // schedule polling to check if the creation operation is completed
    checkStatusWithRetry(client, opIdentifier, 1000, 20);
}

/**
 * Entrypoint into the sample. Expects three arguments to the program.
 * 1. The GCP Zone to use
 * 2. The name to give to the new GKE cluster
 *
 * > node create_cluster.js --zone=<GCP_ZONE> --name=<CLUSTER_NAME>
 */
async function main() {
    if (!args.zone) {
        console.log('Missing zone argument. (e.g. --zone=us-west1-a)');
        exit(1);
    }
    if (!args.name) {
        console.log('Missing cluster name argument. (e.g. --name=gke_cluster)');
        exit(1);
    }
    // Create a new GKE cluster
    createCluster(args.zone, args.name);
}

// program starts here
main().catch(console.error);
// [END gke_create_cluster]
