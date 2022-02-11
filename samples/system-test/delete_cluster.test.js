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
const {describe, it, after, before} = require('mocha');
const {randomUUID} = require('crypto');
const cp = require('child_process');
const container = require('@google-cloud/container');
const untilDone = require('./test_util.js');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('container samples - delete cluster long running op', async () => {
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

  // create a new cluster to test the delete sample on
  before(async function () {
    this.timeout(1000000);
    const request = {
      parent: clusterLocation,
      cluster: {
        name: randomClusterName,
        initialNodeCount: 2,
        nodeConfig: {machineType: 'e2-standard-2'},
      },
    };
    const [createOperation] = await client.createCluster(request);
    const opIdentifier = `${clusterLocation}/operations/${createOperation.name}`;
    await untilDone(client, opIdentifier);
  });

  // clean up the cluster regardless of whether the test passed or not
  after(async function () {
    this.timeout(1000000);
    const request = {name: `${clusterLocation}/clusters/${randomClusterName}`};
    try {
      const [deleteOperation] = await client.deleteCluster(request);
      const opIdentifier = `${clusterLocation}/operations/${deleteOperation.name}`;
      await untilDone(client, opIdentifier);
    } catch (ex) {
      // Error code 5 is NOT_FOUND meaning the cluster was deleted
      if (ex.code === 5) {
        return;
      }
    }
  });

  it('should delete cluster and wait for completion', async function () {
    this.timeout(1000000);
    const stdout = execSync(
      `node delete_cluster.js --zone=${randomZone} --name=${randomClusterName}`
    );
    assert.match(
      stdout,
      /Cluster deletion not complete. will try after .* delay/
    );
    assert.match(stdout, /Cluster deletion completed./);

    const [response] = await client.listClusters({
      projectId: projectId,
      zone: randomZone,
    });
    const clustersList = response.clusters.reduce(
      (acc, curr) => [curr.name, ...acc],
      []
    );
    expect(clustersList).to.not.include(randomClusterName);
  });
});
