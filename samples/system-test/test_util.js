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

const container = require('@google-cloud/container');
const STATUS_ENUM = container.protos.google.container.v1.Operation.Status;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const maxRetries = 20;
let retryCount;
let prevDelay;
let currDelay;

async function retryUntilDone(client, opIdentifier) {
  retryCount = 0;
  prevDelay = 0;
  currDelay = 1000;

  while (retryCount <= maxRetries) {
    const [longRunningOp] = await client.getOperation({name: opIdentifier});
    const status = longRunningOp.status;
    if (status !== STATUS_ENUM[STATUS_ENUM.DONE]) {
      const fibonacciDelay = prevDelay + currDelay;
      prevDelay = currDelay;
      currDelay = fibonacciDelay;
      await sleep(fibonacciDelay);
    } else {
      break;
    }
    retryCount += 1;
  }
}

module.exports = retryUntilDone;
