// Copyright 2017-2021 @axia-js/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { detectPackage } from '@axia-js/util';
import { packageInfo as asmInfo } from '@axia-js/wasm-crypto-asmjs/packageInfo';
import { packageInfo as wasmInfo } from '@axia-js/wasm-crypto-wasm/packageInfo';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [asmInfo, wasmInfo]);
