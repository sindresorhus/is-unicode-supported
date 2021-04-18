import {expectType} from 'tsd';
import isUnicodeSupported from './index.js';

expectType<boolean>(isUnicodeSupported());
