const { resolve } = require('path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
	root: true,
	parserOptions: {
		project,
	},
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
		},
	},
	extends: [
		require.resolve('@vercel/style-guide/eslint/node'),
		require.resolve('@vercel/style-guide/eslint/browser'),
		require.resolve('@vercel/style-guide/eslint/typescript'),
		require.resolve('@vercel/style-guide/eslint/react'),
		require.resolve('@vercel/style-guide/eslint/next'),

		'plugin:eslint-comments/recommended',
		'plugin:import/typescript',
		'plugin:react-perf/recommended',

		'plugin:promise/recommended',
		'plugin:cypress/recommended',

		'next/core-web-vitals',
		'plugin:prettier/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'eslint-comments',
		'promise',
		'simple-import-sort',
		'unused-imports',
		'react-perf',
		'eslint-plugin-no-inline-styles',
		'testing-library',
	],
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
		"no-console": "warn", // All consoles are automatically removed in production
		'no-void': ['error', { allowAsStatement: true }],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true },
		],

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
		'padding-line-between-statements': 'off',
		// '@typescript-eslint/naming-convention': [
		// 	'error',
		// 	{
		// 		selector: 'default',
		// 		format: ['camelCase'],
		// 	},
		// 	{
		// 		selector: 'variable',
		// 		format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
		// 		leadingUnderscore: 'allow',
		// 	},
		// 	{
		// 		selector: 'function',
		// 		format: ['camelCase', 'PascalCase'],
		// 	},
		// 	{
		// 		selector: 'parameter',
		// 		format: ['camelCase', 'PascalCase'],
		// 		leadingUnderscore: 'allow',
		// 	},
		// 	{
		// 		selector: 'parameter',
		// 		modifiers: ['destructured'],
		// 		format: null,
		// 	},
		// 	{
		// 		selector: 'memberLike',
		// 		modifiers: ['private'],
		// 		format: ['camelCase'],
		// 		leadingUnderscore: 'require',
		// 	},
		// 	{
		// 		selector: 'memberLike',
		// 		format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
		// 	},
		// 	{
		// 		selector: 'typeLike',
		// 		format: ['PascalCase', 'UPPER_CASE'],
		// 	},
		// 	{
		// 		selector: 'variable',
		// 		modifiers: ['destructured'],
		// 		format: null,
		// 	},
		// 	{
		// 		selector: 'objectLiteralProperty',
		// 		format: null,
		// 		leadingUnderscore: 'allow',
		// 		trailingUnderscore: 'allow',
		// 	},
		// 	{
		// 		selector: 'interface',
		// 		format: ['PascalCase', 'UPPER_CASE'],
		// 		custom: {
		// 			regex: '^I[A-Z]',
		// 			match: false,
		// 		},
		// 	},
		// 	{
		// 		selector: 'typeProperty',
		// 		format: null,
		// 		leadingUnderscore: 'allow',
		// 		trailingUnderscore: 'allow',
		// 	},
		// ],

		// '@typescript-eslint/padding-line-between-statements': [
		// 	'warn',
		// 	{
		// 		blankLine: 'always',
		// 		prev: '*',
		// 		next: 'block',
		// 	},
		// 	{
		// 		blankLine: 'always',
		// 		prev: 'block',
		// 		next: '*',
		// 	},
		// 	{
		// 		blankLine: 'always',
		// 		prev: '*',
		// 		next: 'block-like',
		// 	},
		// 	{
		// 		blankLine: 'always',
		// 		prev: 'block-like',
		// 		next: '*',
		// 	},
		// 	{
		// 		blankLine: 'always',
		// 		prev: '*',
		// 		next: 'return',
		// 	},
		// 	{
		// 		blankLine: 'always',
		// 		prev: 'case',
		// 		next: '*',
		// 	},
		// 	{
		// 		blankLine: 'always',
		// 		prev: '*',
		// 		next: ['interface', 'type'],
		// 	},
		// 	{
		// 		blankLine: 'always',
		// 		prev: ['interface', 'type'],
		// 		next: '*',
		// 	},
		// ],

		// unicorn
		// Common abbreviations are known and readable
		'unicorn/prevent-abbreviations': 'off',
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
	ignorePatterns: ['**/*.json', '**/*.js'],
	overrides: [
		{
      // enable the rule specifically for TypeScriptJSX files
      "files": ["*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
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
		{
			files: [
				'**/pages/**/*',
				'middleware.ts',
				'**/app/**/{page,loading,error,global-error,not-found,layout,template,default}.tsx',
				'cypress.config.ts',
				'next.config.mjs',
				'*.d.ts',
				"robots.ts",
				"sitemap.ts"
			],
			rules: {
				'import/no-default-export': 'off',
				'react/function-component-definition': 'off',
			},
		},
		{
			files: ['plopfile.js', 'plopfile.mjs'],
			rules: {
				'import/no-default-export': 'off',
				'react/function-component-definition': 'off',
				'import/no-anonymous-default-export': 'off',
				'func-names': 'off',
			},
		},
		{
			files: ['*.cy.ts', '*.cy.tsx', 'cypress/**/*'],
			rules: {
				// "import/no-extraneous-dependencies": "off"
				'promise/catch-or-return': 'off',
				'promise/always-return': 'off',
				'react-perf/jsx-no-new-array-as-prop': 'off',
				'react-perf/jsx-no-new-object-as-prop': 'off',
			},
		},
	],
};
