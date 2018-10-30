// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');

const containerModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ClusterManagerClient', () => {
  describe('listClusters', () => {
    it('invokes listClusters without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listClusters = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listClusters(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listClusters with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listClusters = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listClusters(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getCluster', () => {
    it('invokes getCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const initialNodeCount = 1682564205;
      const loggingService = 'loggingService-1700501035';
      const monitoringService = 'monitoringService1469270462';
      const network = 'network1843485230';
      const clusterIpv4Cidr = 'clusterIpv4Cidr-141875831';
      const subnetwork = 'subnetwork-1302785042';
      const enableKubernetesAlpha = false;
      const labelFingerprint = 'labelFingerprint714995737';
      const selfLink = 'selfLink-1691268851';
      const zone = 'zone3744684';
      const endpoint = 'endpoint1741102485';
      const initialClusterVersion = 'initialClusterVersion-276373352';
      const currentMasterVersion = 'currentMasterVersion-920953983';
      const currentNodeVersion = 'currentNodeVersion-407476063';
      const createTime = 'createTime-493574096';
      const statusMessage = 'statusMessage-239442758';
      const nodeIpv4CidrSize = 1181176815;
      const servicesIpv4Cidr = 'servicesIpv4Cidr1966438125';
      const currentNodeCount = 178977560;
      const expireTime = 'expireTime-96179731';
      const location = 'location1901043637';
      const expectedResponse = {
        name: name2,
        description: description,
        initialNodeCount: initialNodeCount,
        loggingService: loggingService,
        monitoringService: monitoringService,
        network: network,
        clusterIpv4Cidr: clusterIpv4Cidr,
        subnetwork: subnetwork,
        enableKubernetesAlpha: enableKubernetesAlpha,
        labelFingerprint: labelFingerprint,
        selfLink: selfLink,
        zone: zone,
        endpoint: endpoint,
        initialClusterVersion: initialClusterVersion,
        currentMasterVersion: currentMasterVersion,
        currentNodeVersion: currentNodeVersion,
        createTime: createTime,
        statusMessage: statusMessage,
        nodeIpv4CidrSize: nodeIpv4CidrSize,
        servicesIpv4Cidr: servicesIpv4Cidr,
        currentNodeCount: currentNodeCount,
        expireTime: expireTime,
        location: location,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createCluster', () => {
    it('invokes createCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const cluster = {};
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        cluster: cluster,
        parent: formattedParent,
      };

      // Mock response
      const name = 'name3373707';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const cluster = {};
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        cluster: cluster,
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateCluster', () => {
    it('invokes updateCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        update: update,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        update: update,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateNodePool', () => {
    it('invokes updateNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeVersion = 'nodeVersion1790136219';
      const imageType = 'imageType-1442758754';
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeVersion: nodeVersion,
        imageType: imageType,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeVersion = 'nodeVersion1790136219';
      const imageType = 'imageType-1442758754';
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeVersion: nodeVersion,
        imageType: imageType,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolAutoscaling', () => {
    it('invokes setNodePoolAutoscaling without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const autoscaling = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        autoscaling: autoscaling,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolAutoscaling = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolAutoscaling(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolAutoscaling with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const autoscaling = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        autoscaling: autoscaling,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolAutoscaling = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolAutoscaling(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLoggingService', () => {
    it('invokes setLoggingService without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const loggingService = 'loggingService-1700501035';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        loggingService: loggingService,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLoggingService = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLoggingService(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLoggingService with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const loggingService = 'loggingService-1700501035';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        loggingService: loggingService,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLoggingService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLoggingService(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMonitoringService', () => {
    it('invokes setMonitoringService without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const monitoringService = 'monitoringService1469270462';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        monitoringService: monitoringService,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMonitoringService = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMonitoringService(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMonitoringService with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const monitoringService = 'monitoringService1469270462';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        monitoringService: monitoringService,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMonitoringService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMonitoringService(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setAddonsConfig', () => {
    it('invokes setAddonsConfig without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const addonsConfig = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        addonsConfig: addonsConfig,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setAddonsConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setAddonsConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setAddonsConfig with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const addonsConfig = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        addonsConfig: addonsConfig,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setAddonsConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setAddonsConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLocations', () => {
    it('invokes setLocations without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const locations = [];
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        locations: locations,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLocations = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLocations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLocations with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const locations = [];
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        locations: locations,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLocations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLocations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateMaster', () => {
    it('invokes updateMaster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const masterVersion = 'masterVersion-2139460613';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        masterVersion: masterVersion,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateMaster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateMaster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateMaster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const masterVersion = 'masterVersion-2139460613';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        masterVersion: masterVersion,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateMaster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateMaster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMasterAuth', () => {
    it('invokes setMasterAuth without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const action = 'UNKNOWN';
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        action: action,
        update: update,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMasterAuth = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMasterAuth(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMasterAuth with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const action = 'UNKNOWN';
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        action: action,
        update: update,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMasterAuth = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMasterAuth(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteCluster', () => {
    it('invokes deleteCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deleteCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listOperations', () => {
    it('invokes listOperations without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listOperations = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listOperations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listOperations with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listOperations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listOperations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getOperation', () => {
    it('invokes getOperation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOperation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getOperation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getOperation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOperation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getOperation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('cancelOperation', () => {
    it('invokes cancelOperation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelOperation = mockSimpleGrpcMethod(request);

      client.cancelOperation(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes cancelOperation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelOperation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelOperation(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getServerConfig', () => {
    it('invokes getServerConfig without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const defaultClusterVersion = 'defaultClusterVersion111003029';
      const defaultImageType = 'defaultImageType-918225828';
      const expectedResponse = {
        defaultClusterVersion: defaultClusterVersion,
        defaultImageType: defaultImageType,
      };

      // Mock Grpc layer
      client._innerApiCalls.getServerConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getServerConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getServerConfig with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getServerConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getServerConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listNodePools', () => {
    it('invokes listNodePools without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listNodePools = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listNodePools(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listNodePools with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNodePools = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listNodePools(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getNodePool', () => {
    it('invokes getNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const initialNodeCount = 1682564205;
      const selfLink = 'selfLink-1691268851';
      const version = 'version351608024';
      const statusMessage = 'statusMessage-239442758';
      const expectedResponse = {
        name: name2,
        initialNodeCount: initialNodeCount,
        selfLink: selfLink,
        version: version,
        statusMessage: statusMessage,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createNodePool', () => {
    it('invokes createNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodePool = {};
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        nodePool: nodePool,
        parent: formattedParent,
      };

      // Mock response
      const name = 'name3373707';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodePool = {};
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        nodePool: nodePool,
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteNodePool', () => {
    it('invokes deleteNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deleteNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('rollbackNodePoolUpgrade', () => {
    it('invokes rollbackNodePoolUpgrade without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.rollbackNodePoolUpgrade = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.rollbackNodePoolUpgrade(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes rollbackNodePoolUpgrade with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.rollbackNodePoolUpgrade = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.rollbackNodePoolUpgrade(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolManagement', () => {
    it('invokes setNodePoolManagement without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const management = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        management: management,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolManagement = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolManagement(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolManagement with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const management = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        management: management,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolManagement = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolManagement(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLabels', () => {
    it('invokes setLabels without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const resourceLabels = {};
      const labelFingerprint = 'labelFingerprint714995737';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        resourceLabels: resourceLabels,
        labelFingerprint: labelFingerprint,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLabels = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLabels(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLabels with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const resourceLabels = {};
      const labelFingerprint = 'labelFingerprint714995737';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        resourceLabels: resourceLabels,
        labelFingerprint: labelFingerprint,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLabels = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLabels(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLegacyAbac', () => {
    it('invokes setLegacyAbac without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const enabled = false;
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        enabled: enabled,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLegacyAbac = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLegacyAbac(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLegacyAbac with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const enabled = false;
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        enabled: enabled,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLegacyAbac = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLegacyAbac(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('startIPRotation', () => {
    it('invokes startIPRotation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const rotateCredentials = true;
      const request = {
        name: formattedName,
        rotateCredentials: rotateCredentials,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.startIPRotation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.startIPRotation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes startIPRotation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const rotateCredentials = true;
      const request = {
        name: formattedName,
        rotateCredentials: rotateCredentials,
      };

      // Mock Grpc layer
      client._innerApiCalls.startIPRotation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.startIPRotation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('completeIPRotation', () => {
    it('invokes completeIPRotation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.completeIPRotation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.completeIPRotation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes completeIPRotation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.completeIPRotation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.completeIPRotation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolSize', () => {
    it('invokes setNodePoolSize without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeCount = 1539922066;
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeCount: nodeCount,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolSize = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolSize(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolSize with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeCount = 1539922066;
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeCount: nodeCount,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolSize = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolSize(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNetworkPolicy', () => {
    it('invokes setNetworkPolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const networkPolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        networkPolicy: networkPolicy,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNetworkPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNetworkPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNetworkPolicy with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const networkPolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        networkPolicy: networkPolicy,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNetworkPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNetworkPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMaintenancePolicy', () => {
    it('invokes setMaintenancePolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const maintenancePolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        maintenancePolicy: maintenancePolicy,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMaintenancePolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMaintenancePolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMaintenancePolicy with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const maintenancePolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        maintenancePolicy: maintenancePolicy,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMaintenancePolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMaintenancePolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('ClusterManagerClient', () => {
  describe('listClusters', () => {
    it('invokes listClusters without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listClusters = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listClusters(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listClusters with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listClusters = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listClusters(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getCluster', () => {
    it('invokes getCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const initialNodeCount = 1682564205;
      const loggingService = 'loggingService-1700501035';
      const monitoringService = 'monitoringService1469270462';
      const network = 'network1843485230';
      const clusterIpv4Cidr = 'clusterIpv4Cidr-141875831';
      const subnetwork = 'subnetwork-1302785042';
      const enableKubernetesAlpha = false;
      const selfLink = 'selfLink-1691268851';
      const zone = 'zone3744684';
      const endpoint = 'endpoint1741102485';
      const initialClusterVersion = 'initialClusterVersion-276373352';
      const currentMasterVersion = 'currentMasterVersion-920953983';
      const currentNodeVersion = 'currentNodeVersion-407476063';
      const createTime = 'createTime-493574096';
      const statusMessage = 'statusMessage-239442758';
      const nodeIpv4CidrSize = 1181176815;
      const servicesIpv4Cidr = 'servicesIpv4Cidr1966438125';
      const currentNodeCount = 178977560;
      const expireTime = 'expireTime-96179731';
      const location = 'location1901043637';
      const expectedResponse = {
        name: name2,
        description: description,
        initialNodeCount: initialNodeCount,
        loggingService: loggingService,
        monitoringService: monitoringService,
        network: network,
        clusterIpv4Cidr: clusterIpv4Cidr,
        subnetwork: subnetwork,
        enableKubernetesAlpha: enableKubernetesAlpha,
        selfLink: selfLink,
        zone: zone,
        endpoint: endpoint,
        initialClusterVersion: initialClusterVersion,
        currentMasterVersion: currentMasterVersion,
        currentNodeVersion: currentNodeVersion,
        createTime: createTime,
        statusMessage: statusMessage,
        nodeIpv4CidrSize: nodeIpv4CidrSize,
        servicesIpv4Cidr: servicesIpv4Cidr,
        currentNodeCount: currentNodeCount,
        expireTime: expireTime,
        location: location,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createCluster', () => {
    it('invokes createCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const cluster = {};
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        cluster: cluster,
        parent: formattedParent,
      };

      // Mock response
      const name = 'name3373707';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const cluster = {};
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        cluster: cluster,
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateCluster', () => {
    it('invokes updateCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        update: update,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        update: update,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateNodePool', () => {
    it('invokes updateNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeVersion = 'nodeVersion1790136219';
      const imageType = 'imageType-1442758754';
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeVersion: nodeVersion,
        imageType: imageType,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeVersion = 'nodeVersion1790136219';
      const imageType = 'imageType-1442758754';
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeVersion: nodeVersion,
        imageType: imageType,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolAutoscaling', () => {
    it('invokes setNodePoolAutoscaling without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const autoscaling = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        autoscaling: autoscaling,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolAutoscaling = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolAutoscaling(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolAutoscaling with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const autoscaling = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        autoscaling: autoscaling,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolAutoscaling = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolAutoscaling(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLoggingService', () => {
    it('invokes setLoggingService without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const loggingService = 'loggingService-1700501035';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        loggingService: loggingService,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLoggingService = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLoggingService(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLoggingService with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const loggingService = 'loggingService-1700501035';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        loggingService: loggingService,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLoggingService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLoggingService(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMonitoringService', () => {
    it('invokes setMonitoringService without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const monitoringService = 'monitoringService1469270462';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        monitoringService: monitoringService,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMonitoringService = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMonitoringService(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMonitoringService with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const monitoringService = 'monitoringService1469270462';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        monitoringService: monitoringService,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMonitoringService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMonitoringService(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setAddonsConfig', () => {
    it('invokes setAddonsConfig without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const addonsConfig = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        addonsConfig: addonsConfig,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setAddonsConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setAddonsConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setAddonsConfig with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const addonsConfig = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        addonsConfig: addonsConfig,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setAddonsConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setAddonsConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLocations', () => {
    it('invokes setLocations without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const locations = [];
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        locations: locations,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLocations = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLocations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLocations with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const locations = [];
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        locations: locations,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLocations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLocations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateMaster', () => {
    it('invokes updateMaster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const masterVersion = 'masterVersion-2139460613';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        masterVersion: masterVersion,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateMaster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateMaster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateMaster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const masterVersion = 'masterVersion-2139460613';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        masterVersion: masterVersion,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateMaster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateMaster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMasterAuth', () => {
    it('invokes setMasterAuth without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const action = 'UNKNOWN';
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        action: action,
        update: update,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMasterAuth = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMasterAuth(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMasterAuth with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const action = 'UNKNOWN';
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        action: action,
        update: update,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMasterAuth = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMasterAuth(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteCluster', () => {
    it('invokes deleteCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deleteCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listOperations', () => {
    it('invokes listOperations without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listOperations = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listOperations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listOperations with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listOperations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listOperations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getOperation', () => {
    it('invokes getOperation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOperation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getOperation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getOperation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOperation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getOperation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('cancelOperation', () => {
    it('invokes cancelOperation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelOperation = mockSimpleGrpcMethod(request);

      client.cancelOperation(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes cancelOperation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelOperation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelOperation(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getServerConfig', () => {
    it('invokes getServerConfig without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const defaultClusterVersion = 'defaultClusterVersion111003029';
      const defaultImageType = 'defaultImageType-918225828';
      const expectedResponse = {
        defaultClusterVersion: defaultClusterVersion,
        defaultImageType: defaultImageType,
      };

      // Mock Grpc layer
      client._innerApiCalls.getServerConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getServerConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getServerConfig with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getServerConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getServerConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listNodePools', () => {
    it('invokes listNodePools without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listNodePools = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listNodePools(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listNodePools with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNodePools = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listNodePools(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getNodePool', () => {
    it('invokes getNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const initialNodeCount = 1682564205;
      const selfLink = 'selfLink-1691268851';
      const version = 'version351608024';
      const statusMessage = 'statusMessage-239442758';
      const expectedResponse = {
        name: name2,
        initialNodeCount: initialNodeCount,
        selfLink: selfLink,
        version: version,
        statusMessage: statusMessage,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createNodePool', () => {
    it('invokes createNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodePool = {};
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        nodePool: nodePool,
        parent: formattedParent,
      };

      // Mock response
      const name = 'name3373707';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodePool = {};
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        nodePool: nodePool,
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteNodePool', () => {
    it('invokes deleteNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deleteNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('rollbackNodePoolUpgrade', () => {
    it('invokes rollbackNodePoolUpgrade without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.rollbackNodePoolUpgrade = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.rollbackNodePoolUpgrade(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes rollbackNodePoolUpgrade with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.rollbackNodePoolUpgrade = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.rollbackNodePoolUpgrade(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolManagement', () => {
    it('invokes setNodePoolManagement without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const management = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        management: management,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolManagement = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolManagement(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolManagement with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const management = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        management: management,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolManagement = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolManagement(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLabels', () => {
    it('invokes setLabels without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const resourceLabels = {};
      const labelFingerprint = 'labelFingerprint714995737';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        resourceLabels: resourceLabels,
        labelFingerprint: labelFingerprint,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLabels = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLabels(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLabels with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const resourceLabels = {};
      const labelFingerprint = 'labelFingerprint714995737';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        resourceLabels: resourceLabels,
        labelFingerprint: labelFingerprint,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLabels = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLabels(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLegacyAbac', () => {
    it('invokes setLegacyAbac without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const enabled = false;
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        enabled: enabled,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLegacyAbac = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLegacyAbac(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLegacyAbac with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const enabled = false;
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        enabled: enabled,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLegacyAbac = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLegacyAbac(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('startIPRotation', () => {
    it('invokes startIPRotation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const rotateCredentials = true;
      const request = {
        name: formattedName,
        rotateCredentials: rotateCredentials,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.startIPRotation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.startIPRotation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes startIPRotation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const rotateCredentials = true;
      const request = {
        name: formattedName,
        rotateCredentials: rotateCredentials,
      };

      // Mock Grpc layer
      client._innerApiCalls.startIPRotation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.startIPRotation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('completeIPRotation', () => {
    it('invokes completeIPRotation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.completeIPRotation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.completeIPRotation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes completeIPRotation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.completeIPRotation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.completeIPRotation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolSize', () => {
    it('invokes setNodePoolSize without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeCount = 1539922066;
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeCount: nodeCount,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolSize = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolSize(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolSize with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeCount = 1539922066;
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeCount: nodeCount,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolSize = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolSize(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNetworkPolicy', () => {
    it('invokes setNetworkPolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const networkPolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        networkPolicy: networkPolicy,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNetworkPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNetworkPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNetworkPolicy with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const networkPolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        networkPolicy: networkPolicy,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNetworkPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNetworkPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMaintenancePolicy', () => {
    it('invokes setMaintenancePolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const maintenancePolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        maintenancePolicy: maintenancePolicy,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMaintenancePolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMaintenancePolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMaintenancePolicy with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const maintenancePolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        maintenancePolicy: maintenancePolicy,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMaintenancePolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMaintenancePolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.projectPathPath('[PROJECT_PATH]');
      const policy = {};
      const request = {
        resource: formattedResource,
        policy: policy,
      };

      // Mock response
      const version = version351608024;
      const etag = '21';
      const expectedResponse = {
        version: version,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setIamPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setIamPolicy with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.projectPathPath('[PROJECT_PATH]');
      const policy = {};
      const request = {
        resource: formattedResource,
        policy: policy,
      };

      // Mock Grpc layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setIamPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.projectPathPath('[PROJECT_PATH]');
      const request = {
        resource: formattedResource,
      };

      // Mock response
      const version = version351608024;
      const etag = '21';
      const expectedResponse = {
        version: version,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getIamPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getIamPolicy with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.projectPathPath('[PROJECT_PATH]');
      const request = {
        resource: formattedResource,
      };

      // Mock Grpc layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getIamPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('testIamPermissions', () => {
    it('invokes testIamPermissions without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.projectPathPath('[PROJECT_PATH]');
      const permissions = [];
      const request = {
        resource: formattedResource,
        permissions: permissions,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.testIamPermissions(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes testIamPermissions with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.projectPathPath('[PROJECT_PATH]');
      const permissions = [];
      const request = {
        resource: formattedResource,
        permissions: permissions,
      };

      // Mock Grpc layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.testIamPermissions(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listUsableSubnetworks', () => {
    it('invokes listUsableSubnetworks without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock response
      const nextPageToken = '';
      const subnetworksElement = {};
      const subnetworks = [subnetworksElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        subnetworks: subnetworks,
      };

      // Mock Grpc layer
      client._innerApiCalls.listUsableSubnetworks = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.subnetworks);
      };

      client.listUsableSubnetworks(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.subnetworks);
        done();
      });
    });

    it('invokes listUsableSubnetworks with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock Grpc layer
      client._innerApiCalls.listUsableSubnetworks = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listUsableSubnetworks(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('ClusterManagerClient', () => {
  describe('listClusters', () => {
    it('invokes listClusters without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listClusters = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listClusters(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listClusters with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listClusters = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listClusters(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getCluster', () => {
    it('invokes getCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const initialNodeCount = 1682564205;
      const loggingService = 'loggingService-1700501035';
      const monitoringService = 'monitoringService1469270462';
      const network = 'network1843485230';
      const clusterIpv4Cidr = 'clusterIpv4Cidr-141875831';
      const subnetwork = 'subnetwork-1302785042';
      const enableKubernetesAlpha = false;
      const labelFingerprint = 'labelFingerprint714995737';
      const privateCluster = true;
      const masterIpv4CidrBlock = 'masterIpv4CidrBlock-97940801';
      const selfLink = 'selfLink-1691268851';
      const zone = 'zone3744684';
      const endpoint = 'endpoint1741102485';
      const initialClusterVersion = 'initialClusterVersion-276373352';
      const currentMasterVersion = 'currentMasterVersion-920953983';
      const currentNodeVersion = 'currentNodeVersion-407476063';
      const createTime = 'createTime-493574096';
      const statusMessage = 'statusMessage-239442758';
      const nodeIpv4CidrSize = 1181176815;
      const servicesIpv4Cidr = 'servicesIpv4Cidr1966438125';
      const currentNodeCount = 178977560;
      const expireTime = 'expireTime-96179731';
      const location = 'location1901043637';
      const enableTpu = false;
      const tpuIpv4CidrBlock = 'tpuIpv4CidrBlock1137906646';
      const expectedResponse = {
        name: name2,
        description: description,
        initialNodeCount: initialNodeCount,
        loggingService: loggingService,
        monitoringService: monitoringService,
        network: network,
        clusterIpv4Cidr: clusterIpv4Cidr,
        subnetwork: subnetwork,
        enableKubernetesAlpha: enableKubernetesAlpha,
        labelFingerprint: labelFingerprint,
        privateCluster: privateCluster,
        masterIpv4CidrBlock: masterIpv4CidrBlock,
        selfLink: selfLink,
        zone: zone,
        endpoint: endpoint,
        initialClusterVersion: initialClusterVersion,
        currentMasterVersion: currentMasterVersion,
        currentNodeVersion: currentNodeVersion,
        createTime: createTime,
        statusMessage: statusMessage,
        nodeIpv4CidrSize: nodeIpv4CidrSize,
        servicesIpv4Cidr: servicesIpv4Cidr,
        currentNodeCount: currentNodeCount,
        expireTime: expireTime,
        location: location,
        enableTpu: enableTpu,
        tpuIpv4CidrBlock: tpuIpv4CidrBlock,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createCluster', () => {
    it('invokes createCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const cluster = {};
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        cluster: cluster,
        parent: formattedParent,
      };

      // Mock response
      const name = 'name3373707';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const cluster = {};
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        cluster: cluster,
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateCluster', () => {
    it('invokes updateCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        update: update,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        update: update,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateNodePool', () => {
    it('invokes updateNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeVersion = 'nodeVersion1790136219';
      const imageType = 'imageType-1442758754';
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeVersion: nodeVersion,
        imageType: imageType,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeVersion = 'nodeVersion1790136219';
      const imageType = 'imageType-1442758754';
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeVersion: nodeVersion,
        imageType: imageType,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolAutoscaling', () => {
    it('invokes setNodePoolAutoscaling without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const autoscaling = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        autoscaling: autoscaling,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolAutoscaling = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolAutoscaling(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolAutoscaling with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const autoscaling = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        autoscaling: autoscaling,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolAutoscaling = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolAutoscaling(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLoggingService', () => {
    it('invokes setLoggingService without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const loggingService = 'loggingService-1700501035';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        loggingService: loggingService,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLoggingService = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLoggingService(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLoggingService with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const loggingService = 'loggingService-1700501035';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        loggingService: loggingService,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLoggingService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLoggingService(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMonitoringService', () => {
    it('invokes setMonitoringService without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const monitoringService = 'monitoringService1469270462';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        monitoringService: monitoringService,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMonitoringService = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMonitoringService(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMonitoringService with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const monitoringService = 'monitoringService1469270462';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        monitoringService: monitoringService,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMonitoringService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMonitoringService(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setAddonsConfig', () => {
    it('invokes setAddonsConfig without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const addonsConfig = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        addonsConfig: addonsConfig,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setAddonsConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setAddonsConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setAddonsConfig with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const addonsConfig = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        addonsConfig: addonsConfig,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setAddonsConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setAddonsConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLocations', () => {
    it('invokes setLocations without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const locations = [];
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        locations: locations,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLocations = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLocations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLocations with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const locations = [];
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        locations: locations,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLocations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLocations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateMaster', () => {
    it('invokes updateMaster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const masterVersion = 'masterVersion-2139460613';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        masterVersion: masterVersion,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateMaster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateMaster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateMaster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const masterVersion = 'masterVersion-2139460613';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        masterVersion: masterVersion,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateMaster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateMaster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMasterAuth', () => {
    it('invokes setMasterAuth without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const action = 'UNKNOWN';
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        action: action,
        update: update,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMasterAuth = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMasterAuth(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMasterAuth with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const action = 'UNKNOWN';
      const update = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        action: action,
        update: update,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMasterAuth = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMasterAuth(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteCluster', () => {
    it('invokes deleteCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deleteCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteCluster with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listOperations', () => {
    it('invokes listOperations without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listOperations = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listOperations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listOperations with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listOperations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listOperations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getOperation', () => {
    it('invokes getOperation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOperation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getOperation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getOperation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOperation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getOperation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('cancelOperation', () => {
    it('invokes cancelOperation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelOperation = mockSimpleGrpcMethod(request);

      client.cancelOperation(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes cancelOperation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.operationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[OPERATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelOperation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelOperation(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getServerConfig', () => {
    it('invokes getServerConfig without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const defaultClusterVersion = 'defaultClusterVersion111003029';
      const defaultImageType = 'defaultImageType-918225828';
      const expectedResponse = {
        defaultClusterVersion: defaultClusterVersion,
        defaultImageType: defaultImageType,
      };

      // Mock Grpc layer
      client._innerApiCalls.getServerConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getServerConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getServerConfig with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getServerConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getServerConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listNodePools', () => {
    it('invokes listNodePools without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listNodePools = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listNodePools(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listNodePools with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNodePools = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listNodePools(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getNodePool', () => {
    it('invokes getNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const initialNodeCount = 1682564205;
      const selfLink = 'selfLink-1691268851';
      const version = 'version351608024';
      const statusMessage = 'statusMessage-239442758';
      const expectedResponse = {
        name: name2,
        initialNodeCount: initialNodeCount,
        selfLink: selfLink,
        version: version,
        statusMessage: statusMessage,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createNodePool', () => {
    it('invokes createNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodePool = {};
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        nodePool: nodePool,
        parent: formattedParent,
      };

      // Mock response
      const name = 'name3373707';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodePool = {};
      const formattedParent = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        nodePool: nodePool,
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteNodePool', () => {
    it('invokes deleteNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deleteNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteNodePool with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('rollbackNodePoolUpgrade', () => {
    it('invokes rollbackNodePoolUpgrade without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.rollbackNodePoolUpgrade = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.rollbackNodePoolUpgrade(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes rollbackNodePoolUpgrade with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.rollbackNodePoolUpgrade = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.rollbackNodePoolUpgrade(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolManagement', () => {
    it('invokes setNodePoolManagement without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const management = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        management: management,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolManagement = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolManagement(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolManagement with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const management = {};
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        management: management,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolManagement = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolManagement(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLabels', () => {
    it('invokes setLabels without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const resourceLabels = {};
      const labelFingerprint = 'labelFingerprint714995737';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        resourceLabels: resourceLabels,
        labelFingerprint: labelFingerprint,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLabels = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLabels(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLabels with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const resourceLabels = {};
      const labelFingerprint = 'labelFingerprint714995737';
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        resourceLabels: resourceLabels,
        labelFingerprint: labelFingerprint,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLabels = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLabels(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLegacyAbac', () => {
    it('invokes setLegacyAbac without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const enabled = false;
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        enabled: enabled,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLegacyAbac = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLegacyAbac(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLegacyAbac with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const enabled = false;
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        enabled: enabled,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLegacyAbac = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLegacyAbac(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('startIPRotation', () => {
    it('invokes startIPRotation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const rotateCredentials = true;
      const request = {
        name: formattedName,
        rotateCredentials: rotateCredentials,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.startIPRotation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.startIPRotation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes startIPRotation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const rotateCredentials = true;
      const request = {
        name: formattedName,
        rotateCredentials: rotateCredentials,
      };

      // Mock Grpc layer
      client._innerApiCalls.startIPRotation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.startIPRotation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('completeIPRotation', () => {
    it('invokes completeIPRotation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.completeIPRotation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.completeIPRotation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes completeIPRotation with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.completeIPRotation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.completeIPRotation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolSize', () => {
    it('invokes setNodePoolSize without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeCount = 1539922066;
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeCount: nodeCount,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolSize = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolSize(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolSize with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const nodeCount = 1539922066;
      const formattedName = client.nodePoolPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]',
        '[NODE_POOL]'
      );
      const request = {
        nodeCount: nodeCount,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolSize = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolSize(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNetworkPolicy', () => {
    it('invokes setNetworkPolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const networkPolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        networkPolicy: networkPolicy,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNetworkPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNetworkPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNetworkPolicy with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const networkPolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        networkPolicy: networkPolicy,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNetworkPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNetworkPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMaintenancePolicy', () => {
    it('invokes setMaintenancePolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const maintenancePolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        maintenancePolicy: maintenancePolicy,
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const zone = 'zone3744684';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const location = 'location1901043637';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
        name: name2,
        zone: zone,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        location: location,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMaintenancePolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMaintenancePolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMaintenancePolicy with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const maintenancePolicy = {};
      const formattedName = client.clusterPath(
        '[PROJECT]',
        '[LOCATION]',
        '[CLUSTER]'
      );
      const request = {
        maintenancePolicy: maintenancePolicy,
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMaintenancePolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMaintenancePolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listUsableSubnetworks', () => {
    it('invokes listUsableSubnetworks without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock response
      const nextPageToken = '';
      const subnetworksElement = {};
      const subnetworks = [subnetworksElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        subnetworks: subnetworks,
      };

      // Mock Grpc layer
      client._innerApiCalls.listUsableSubnetworks = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.subnetworks);
      };

      client.listUsableSubnetworks(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.subnetworks);
        done();
      });
    });

    it('invokes listUsableSubnetworks with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock Grpc layer
      client._innerApiCalls.listUsableSubnetworks = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listUsableSubnetworks(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listLocations', () => {
    it('invokes listLocations without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = 'nextPageToken-1530815211';
      const expectedResponse = {
        nextPageToken: nextPageToken,
      };

      // Mock Grpc layer
      client._innerApiCalls.listLocations = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listLocations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listLocations with error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listLocations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listLocations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
