// Copyright 2019-2021 @axia-js/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

const rootIncl = ['@axia-js/wasm-crypto-asmjs', '@axia-js/wasm-crypto-wasm'];
const detcIncl = rootIncl.map((p) => `${p}/packageInfo`);

require('override-require')(
  (request) =>
    rootIncl.some((p) => request.endsWith(p)) ||
    detcIncl.some((p) => request.endsWith(p)),
  (request) =>
    rootIncl.some((p) => request.endsWith(p))
      ? require(`${rootIncl.find((p) => request.endsWith(p))}/build/data.cjs`)
      : require(`${detcIncl.find((p) => request.endsWith(p)).replace('packageInfo', 'build/packageInfo.cjs')}`)
);
