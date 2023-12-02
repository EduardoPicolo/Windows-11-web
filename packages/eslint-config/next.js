const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'plugin:eslint-comments/recommended',
		'plugin:import/typescript',
		'plugin:react-perf/recommended',
		'plugin:promise/recommended',
		'plugin:cypress/recommended',

		'eslint:recommended',
		'prettier',
		require.resolve('@vercel/style-guide/eslint/next'),
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
		'@typescript-eslint',
		'eslint-comments',
		'promise',
		'simple-import-sort',
		'unused-imports',
		'react-perf',
		'eslint-plugin-no-inline-styles',
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

		// import rules
		// 'import/no-extraneous-dependencies': [
		// 	'error',
		// 	{ devDependencies: true },
		// ],
		// 'import/order': 'off',
		// 'import/prefer-default-export': 'off',
		// 'import/no-default-export': 'error',
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
		// 'import/first': 'warn',
		// 'import/newline-after-import': 'warn',
		// 'import/no-duplicates': 'error',
		// 'import/no-cycle': 'error',
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
		'@typescript-eslint/prefer-nullish-coalescing': [
			'error',
			{
				ignoreConditionalTests: true,
				ignorePrimitives: true,
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

		// // unicorn
		// // Common abbreviations are known and readable
		// 'unicorn/prevent-abbreviations': 'off',
		// 'unicorn/filename-case': [
		// 	'error',
		// 	{
		// 		cases: {
		// 			camelCase: true,
		// 			pascalCase: true,
		// 			kebabCase: true,
		// 		},
		// 		ignore: [
		// 			// Ignore "CC" (Chaincode) anywhere in the filename
		// 			'CC',
		// 			// Ignore "CA" (Certificate Authority) anywhere in the filename
		// 			'CA',
		// 			// Ignore "VM" (Virtual Machine) anywhere in the filename
		// 			'VM',
		// 			// Ignore "SSH" anywhere in the filename
		// 			'SSH',
		// 			// Ignore files that start with numbers
		// 			'^[0-9]',
		// 		],
		// 	},
		// ],
		// 'unicorn/no-null': 'off',
		// 'unicorn/no-array-for-each': 'off',
		// 'unicorn/no-array-reduce': 'off',
	},
	ignorePatterns: [
		// Ignore dotfiles
		'.*.js',
		'node_modules/',
	],
	overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
