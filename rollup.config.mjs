// Copyright 2019-2021 @axia-js/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createBundle } from '@axia-js/dev/config/rollup.js';

const pkgs = [
  '@axia-js/wasm-crypto'
];

const external = [
  ...pkgs,
  '@axia-js/util'
];

const overrides = {
  '@axia-js/wasm-crypto': {
    entries: ['asmjs', 'wasm'].map((p) => `wasm-crypto-${p}`).reduce((all, p) => ({
      ...all,
      [`@axia-js/${p}`]: `../../${p}/build`
    }), {})
  }
};

export default pkgs.map((pkg) =>
  createBundle({
    external,
    pkg,
    ...(overrides[pkg] || {})
  })
);
