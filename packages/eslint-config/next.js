const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		require.resolve('@vercel/style-guide/eslint/node'),
		require.resolve('@vercel/style-guide/eslint/browser'),
		require.resolve('@vercel/style-guide/eslint/typescript'),
		require.resolve('@vercel/style-guide/eslint/react'),
		require.resolve('@vercel/style-guide/eslint/next'),
		'plugin:eslint-comments/recommended',
		'plugin:react-perf/recommended',
		'plugin:promise/recommended',
		'plugin:cypress/recommended',
		'plugin:prettier/recommended',
		'plugin:@next/next/recommended',
		'eslint-config-turbo',
	],
	globals: {
		React: true,
		JSX: true,
	},
	env: {
		node: true,
	},
	plugins: [
		'only-warn',
		/**
		 * NOTE: `@typescript-eslint` plugin should have the same version
		 * as `@vercel/style-guide/eslint`
		 */
		// '@typescript-eslint',
		'eslint-comments',
		'promise',
		'simple-import-sort',
		'unused-imports',
		'react-perf',
		'eslint-plugin-no-inline-styles',
		'eslint-plugin-tsdoc',
		'testing-library',
	],
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
		},
	},
	rules: {
		// React rules
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react-perf/jsx-no-new-object-as-prop': 'warn',
		'react-perf/jsx-no-new-array-as-prop': 'warn',
		'no-inline-styles/no-inline-styles': 'error',
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: true,
				reservedFirst: true,
			},
		],

		// eslint rules
		'consistent-return': [
			'error',
			{
				treatUndefinedAsUnspecified: true,
			},
		],
		'no-underscore-dangle': 'off',
		'eslint-comments/no-use': ['warn', { allow: ['eslint-enable'] }],
		'eslint-comments/require-description': [
			'error',
			{ ignore: ['eslint-enable'] },
		],
		'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
		'no-console': 'warn', // All consoles are automatically removed in production
		'no-void': ['error', { allowAsStatement: true }],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true },
		],
		camelcase: ['off'],

		// import rules
		'import/order': 'off',
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
		'import/first': 'warn',
		'import/newline-after-import': 'warn',
		'import/no-duplicates': 'error',
		'import/no-cycle': 'error',
		'unused-imports/no-unused-imports': 'warn',
		'no-unused-vars': 'off', // We use unused-imports/no-unused-vars instead
		'@typescript-eslint/no-unused-vars': 'off', // We use unused-imports/no-unused-vars instead
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],

		// typescript rules
		'tsdoc/syntax': 'warn',
		'@typescript-eslint/no-unnecessary-condition': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': [
			'error',
			{
				ignorePrimitives: {
					string: true,
				},
			},
		],
		'@typescript-eslint/no-explicit-any': [
			'error',
			{
				ignoreRestArgs: true,
			},
		],
		'@typescript-eslint/no-unnecessary-type-assertion': [
			'error',
			{
				typesToIgnore: ['Route'],
			},
		],
		'@typescript-eslint/no-namespace': [
			'error',
			{
				allowDeclarations: true,
				allowDefinitionFiles: true,
			},
		],
		// '@typescript-eslint/no-unsafe-assignment': 'off', // Slow
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/no-floating-promises': 'error',
		// 'padding-line-between-statements': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'typeLike',
				format: ['PascalCase', 'UPPER_CASE'],
			},
			{
				selector: 'interface',
				format: ['PascalCase', 'UPPER_CASE'],
				custom: {
					regex: '^I[A-Z]',
					match: false,
				},
			},
		],

		// unicorn
		'unicorn/prevent-abbreviations': 'off', // Common abbreviations are known and readable
		'unicorn/numeric-separators-style': 'warn',
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true,
					kebabCase: true,
				},
				ignore: [
					// Ignore "CC" (Chaincode) anywhere in the filename
					'CC',
					// Ignore "CA" (Certificate Authority) anywhere in the filename
					'CA',
					// Ignore "VM" (Virtual Machine) anywhere in the filename
					'VM',
					// Ignore "SSH" anywhere in the filename
					'SSH',
					// Ignore files that start with numbers
					'^[0-9]',
				],
			},
		],
		'unicorn/no-null': 'off',
		'unicorn/no-array-for-each': 'off',
		'unicorn/no-array-reduce': 'off',
	},
	ignorePatterns: [
		// Ignore dotfiles
		'.*.js',
		'node_modules/',
	],
	overrides: [
		{ files: ['*.js?(x)', '*.ts?(x)'] },
		{
			files: [
				'**/app/**/{page,loading,error,global-error,not-found,layout,template,default}.tsx',
			],
			rules: {
				'import/no-default-export': 'off',
				'react/function-component-definition': 'off',
			},
		},
		{
			// enable the rule specifically for TypeScriptJSX files
			files: ['*.tsx', '*.ts'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
		{
			files: ['src/**/*', '__tests__/**/*'],
			rules: {
				'simple-import-sort/imports': [
					'warn',
					{
						groups: [
							// Node.js builtins. You could also generate this regex if you use a `.js` config.
							// For example: `^(${require("module").builtinModules.join("|")})(/|$)`
							[
								'^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
							],
							// Packages. `react` related packages come first.
							['^next', '^react$', '^@chakra', '^react', '^@?\\w'],
							['^@repo'],
							// Internal packages.
							['^(@/)(/.*|$|..)'],
							// Side effect imports.
							['^\\u0000'],
							// Parent imports. Put `..` last.
							['^\\.\\.(?!/?$)', '^\\.\\./?$'],
							// Other relative imports. Put same-folder imports and `.` last.
							['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
							// Style imports.
							['@styles', '^.+\\.s?css$'],
						],
					},
				],
			},
		},
	],
};
