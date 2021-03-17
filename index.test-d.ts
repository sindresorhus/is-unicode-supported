import {expectType} from 'tsd';
import isUnicodeSupported = require('.');

expectType<boolean>(isUnicodeSupported());
