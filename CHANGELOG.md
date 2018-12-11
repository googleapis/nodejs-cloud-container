# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/container?activeTab=versions

## v0.3.0

12-11-2018 10:08 PST

### Implementation Changes
**This library no longer support Node.js 4.x and 9.x, use of these out of LTS versions of Node.js with this library might not work in the future.**
- fix: drop support for node.js 4.x and 9.x ([#46](https://github.com/googleapis/nodejs-cloud-container/pull/46))

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#117](https://github.com/googleapis/nodejs-cloud-container/pull/117))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#113](https://github.com/googleapis/nodejs-cloud-container/pull/113))
- chore(deps): update dependency eslint-plugin-node to v8 ([#102](https://github.com/googleapis/nodejs-cloud-container/pull/102))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#86](https://github.com/googleapis/nodejs-cloud-container/pull/86))
- fix(deps): update dependency google-gax to ^0.20.0 ([#75](https://github.com/googleapis/nodejs-cloud-container/pull/75))
- Remove unused dependencies ([#72](https://github.com/googleapis/nodejs-cloud-container/pull/72))
- chore(deps): update dependency nyc to v13 ([#67](https://github.com/googleapis/nodejs-cloud-container/pull/67))
- fix(deps): update dependency google-gax to ^0.19.0 ([#66](https://github.com/googleapis/nodejs-cloud-container/pull/66))
- chore(deps): update dependency eslint-config-prettier to v3 ([#65](https://github.com/googleapis/nodejs-cloud-container/pull/65))
- chore(deps): lock file maintenance ([#62](https://github.com/googleapis/nodejs-cloud-container/pull/62))
- chore(deps): lock file maintenance ([#61](https://github.com/googleapis/nodejs-cloud-container/pull/61))
- fix(deps): update dependency google-gax to ^0.18.0 ([#58](https://github.com/googleapis/nodejs-cloud-container/pull/58))
- chore(deps): lock file maintenance ([#57](https://github.com/googleapis/nodejs-cloud-container/pull/57))
- chore(deps): lock file maintenance ([#54](https://github.com/googleapis/nodejs-cloud-container/pull/54))
- chore(deps): update dependency eslint-plugin-node to v7 ([#52](https://github.com/googleapis/nodejs-cloud-container/pull/52))
- chore(deps): lock file maintenance ([#51](https://github.com/googleapis/nodejs-cloud-container/pull/51))
- chore(deps): lock file maintenance ([#49](https://github.com/googleapis/nodejs-cloud-container/pull/49))
- chore(deps): lock file maintenance ([#48](https://github.com/googleapis/nodejs-cloud-container/pull/48))
- chore(deps): lock file maintenance ([#47](https://github.com/googleapis/nodejs-cloud-container/pull/47))
- chore(deps): lock file maintenance ([#45](https://github.com/googleapis/nodejs-cloud-container/pull/45))
- chore(deps): lock file maintenance ([#44](https://github.com/googleapis/nodejs-cloud-container/pull/44))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.0 ([#41](https://github.com/googleapis/nodejs-cloud-container/pull/41))

### Documentation
- docs: update readme badges ([#127](https://github.com/googleapis/nodejs-cloud-container/pull/127))
- docs(samples): updated samples code to use async await ([#122](https://github.com/googleapis/nodejs-cloud-container/pull/122))
- fix(docs): README.md using @google-cloud/cloud-container ([#114](https://github.com/googleapis/nodejs-cloud-container/pull/114))

### Internal / Testing Changes
- chore: fix publish.sh permission +x ([#138](https://github.com/googleapis/nodejs-cloud-container/pull/138))
- fix(build): fix Kokoro release script ([#137](https://github.com/googleapis/nodejs-cloud-container/pull/137))
- build: add Kokoro configs for autorelease ([#136](https://github.com/googleapis/nodejs-cloud-container/pull/136))
- chore: always nyc report before calling codecov ([#133](https://github.com/googleapis/nodejs-cloud-container/pull/133))
- chore: nyc ignore build/test by default ([#132](https://github.com/googleapis/nodejs-cloud-container/pull/132))
- chore: clean up usage of prettier and eslint ([#131](https://github.com/googleapis/nodejs-cloud-container/pull/131))
- chore: update license file ([#129](https://github.com/googleapis/nodejs-cloud-container/pull/129))
- fix(build): fix system key decryption ([#125](https://github.com/googleapis/nodejs-cloud-container/pull/125))
- chore: add synth.metadata
- chore: update eslintignore config ([#116](https://github.com/googleapis/nodejs-cloud-container/pull/116))
- Update synth.py yaml path ([#115](https://github.com/googleapis/nodejs-cloud-container/pull/115))
- chore: drop contributors from multiple places ([#112](https://github.com/googleapis/nodejs-cloud-container/pull/112))
- chore: use latest npm on Windows ([#111](https://github.com/googleapis/nodejs-cloud-container/pull/111))
- chore: update CircleCI config ([#109](https://github.com/googleapis/nodejs-cloud-container/pull/109))
- chore: include build in eslintignore ([#106](https://github.com/googleapis/nodejs-cloud-container/pull/106))
- chore: update issue templates ([#100](https://github.com/googleapis/nodejs-cloud-container/pull/100))
- chore: remove old issue template ([#98](https://github.com/googleapis/nodejs-cloud-container/pull/98))
- build: run tests on node11 ([#97](https://github.com/googleapis/nodejs-cloud-container/pull/97))
- chores(build): do not collect sponge.xml from windows builds ([#96](https://github.com/googleapis/nodejs-cloud-container/pull/96))
- chores(build): run codecov on continuous builds ([#95](https://github.com/googleapis/nodejs-cloud-container/pull/95))
- chore: update new issue template ([#94](https://github.com/googleapis/nodejs-cloud-container/pull/94))
- build: fix codecov uploading on Kokoro ([#89](https://github.com/googleapis/nodejs-cloud-container/pull/89))
- Update kokoro config ([#87](https://github.com/googleapis/nodejs-cloud-container/pull/87))
- Update kokoro config ([#83](https://github.com/googleapis/nodejs-cloud-container/pull/83))
- Update CI config ([#82](https://github.com/googleapis/nodejs-cloud-container/pull/82))
- test: remove appveyor config ([#81](https://github.com/googleapis/nodejs-cloud-container/pull/81))
- Update the CI config ([#80](https://github.com/googleapis/nodejs-cloud-container/pull/80))
- Enable prefer-const in the eslint config ([#78](https://github.com/googleapis/nodejs-cloud-container/pull/78))
- Enable no-var in eslint ([#77](https://github.com/googleapis/nodejs-cloud-container/pull/77))
- Switch to let/const ([#76](https://github.com/googleapis/nodejs-cloud-container/pull/76))
- Update CI config ([#74](https://github.com/googleapis/nodejs-cloud-container/pull/74))
- Update CI Config ([#73](https://github.com/googleapis/nodejs-cloud-container/pull/73))
- Retry npm install in CI ([#71](https://github.com/googleapis/nodejs-cloud-container/pull/71))
- add templates to synth.py ([#68](https://github.com/googleapis/nodejs-cloud-container/pull/68))
- chore: do not use npm ci ([#64](https://github.com/googleapis/nodejs-cloud-container/pull/64))
- chore: ignore package-lock.json ([#63](https://github.com/googleapis/nodejs-cloud-container/pull/63))
- chore: update renovate config ([#60](https://github.com/googleapis/nodejs-cloud-container/pull/60))
- remove that whitespace ([#59](https://github.com/googleapis/nodejs-cloud-container/pull/59))
- chore: move mocha options to mocha.opts ([#55](https://github.com/googleapis/nodejs-cloud-container/pull/55))
- chore: require node 8 for samples ([#56](https://github.com/googleapis/nodejs-cloud-container/pull/56))
- test: use strictEqual in tests ([#53](https://github.com/googleapis/nodejs-cloud-container/pull/53))
- Check in synth script and update gax dependency ([#43](https://github.com/googleapis/nodejs-cloud-container/pull/43))
- fix: update to the latest eslint ([#40](https://github.com/googleapis/nodejs-cloud-container/pull/40))
- Configure Renovate ([#33](https://github.com/googleapis/nodejs-cloud-container/pull/33))
- refactor: drop repo-tool as an exec wrapper ([#39](https://github.com/googleapis/nodejs-cloud-container/pull/39))
- fix: update linking for samples ([#36](https://github.com/googleapis/nodejs-cloud-container/pull/36))
- chore: update sample lockfiles ([#38](https://github.com/googleapis/nodejs-cloud-container/pull/38))
- Update nyc to the latest version 🚀 ([#30](https://github.com/googleapis/nodejs-cloud-container/pull/30))
- chore: lock files maintenance ([#29](https://github.com/googleapis/nodejs-cloud-container/pull/29))
- chore: the ultimate fix for repo-tools EPERM ([#28](https://github.com/googleapis/nodejs-cloud-container/pull/28))
- chore: timeout for system test ([#27](https://github.com/googleapis/nodejs-cloud-container/pull/27))
- chore: lock files maintenance ([#26](https://github.com/googleapis/nodejs-cloud-container/pull/26))
- chore: test on node10 ([#25](https://github.com/googleapis/nodejs-cloud-container/pull/25))
- chore: lock files maintenance ([#24](https://github.com/googleapis/nodejs-cloud-container/pull/24))

