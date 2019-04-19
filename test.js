import test from 'ava';
import compressedExtensions from '.';

test('main', t => {
	t.true(Array.isArray(compressedExtensions));
	t.true(compressedExtensions.length > 0);
});
