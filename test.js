import test from 'ava';
import compressedExtensions from './index.js';

test('main', t => {
	t.true(Array.isArray(compressedExtensions));
	t.true(compressedExtensions.length > 0);
});
