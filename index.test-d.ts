import {expectType} from 'tsd';
import compressedExtensions = require('.');
import compressedExtensionsJson = require('./compressed-extensions.json');

expectType<readonly string[]>(compressedExtensions);
expectType<readonly string[]>(compressedExtensionsJson);
