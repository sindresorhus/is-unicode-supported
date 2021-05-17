import test from 'ava';
import isUnicodeSupported from './index.js';

test.serial('main', t => {
	t.true(isUnicodeSupported());
});

test.serial('windows', t => {
	delete process.env.CI;
	delete process.env.TERM;
	delete process.env.TERM_PROGRAM;
	delete process.env.WT_SESSION;

	const originalPlatform = process.platform;

	Object.defineProperty(process, 'platform', {value: 'win32'});
	t.true(isUnicodeSupported());
	process.env.WT_SESSION = '1';
	t.falss(isUnicodeSupported());

	Object.defineProperty(process, 'platform', {value: originalPlatform});
});
