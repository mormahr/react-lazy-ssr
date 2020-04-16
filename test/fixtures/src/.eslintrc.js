/* --------------------
 * react-lazy-ssr module
 * ESLint config
 * ------------------*/

// Exports

module.exports = {
	env: {
		browser: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	rules: {
		'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules', 'dynamicImport']}]
	}
};
