/* --------------------
 * react-lazy-ssr module
 * Test fixtures
 * Babel config to build all fixtures
 * ------------------*/

'use strict';

// Exports
module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react'
	],
	plugins: [
		'@babel/plugin-syntax-dynamic-import'
	]
};
