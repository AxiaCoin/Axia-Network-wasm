// Copyright 2019-2021 @axia-js/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@axia-js/dev/config/jest.cjs');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@axia-js/wasm-crypto-asmjs(.*)$': '<rootDir>/packages/wasm-crypto-asmjs/build/$1',
    '@axia-js/wasm-crypto-wasm(.*)$': '<rootDir>/packages/wasm-crypto-wasm/build/$1',
    // eslint-disable-next-line sort-keys
    '@axia-js/wasm-crypto(.*)$': '<rootDir>/packages/wasm-crypto/src/$1'
  }
});
