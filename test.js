'use strict';
var test = require('ava');
var compressedExtensions = require('./');

test(function (t) {
	t.assert(Array.isArray(compressedExtensions));
	t.assert(compressedExtensions.length > 0);
	t.end();
});
