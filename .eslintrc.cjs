module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		tsconfigRootDir: __dirname,
		extraFileExtensions: ['.svelte', '.json', '.php', '.html'],
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		'eslint:recommended',
		// "plugin:svelte/recommended", (conflicts with tailwind css rules and is not required because of the explicit ruleset below)
		'plugin:@typescript-eslint/recommended',
		'plugin:tailwindcss/recommended'
	],
	plugins: ['html', 'svelte', 'import', '@typescript-eslint'],
	ignorePatterns: [
		'public/build',
		'node_modules/',
		'tailwind.config.*',
		'vite.config.*',
		'.cjs',
		'*.pcss',
		'dist/',
		'*.cjs',
		'*.md',
		'composer.*',
		'*.json'
	],
	settings: {
		'html/html-extensions': ['.html'],
		svelte: {
			ignoreWarnings: [
				'@typescript-eslint/no-unsafe-assignment',
				'@typescript-eslint/no-unsafe-member-access'
			],
			kit: {
				files: {
					routes: 'src/routes'
				}
			}
		},
		tailwindcss: {
			config: './tailwind.config.js',
			removeDuplicates: true,
			classRegex: '^(k|c)lass(Name)?$'
		}
	},
	env: {
		es6: true,
		browser: true,
		node: true
	},
	rules: {
		// Base eslint rules
		quotes: ['error', 'single'], // enforce single quotes
		semi: ['error', 'always'], // enforce semicolons
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], // disallow console
		indent: ['error', 2], // enforce consistent indentation
		'no-multi-spaces': 'error', // disallow multiple spaces
		curly: ['error', 'multi-line'], // enforce brace style
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		'logical-assignment-operators': ['warn'], // disallow logical assignment operators in conditional expression
		'no-compare-neg-zero': 'error', // disallow comparing against negative zero
		'no-debugger': 'error', // disallow debugger
		'no-constant-condition': 'error', // disallow constant expressions in conditions
		'no-dupe-else-if': 'error', // disallow duplicate else if blocks
		'no-dupe-keys': 'error', // disallow duplicate keys in object literals
		'no-duplicate-case': 'error', // disallow duplicate case labels in a switch statement
		'no-else-return': 'error', // disallow else after a return in an if statement
		'no-empty-pattern': 'error', // disallow empty destructuring patterns
		'arrow-body-style': ['error', 'as-needed'], // enforce consistent arrow function body style
		'one-var': ['error', 'never'], // enforce variables to be declared either together or separately in functions
		'prefer-arrow-callback': 'error', // require arrow callbacks
		'prefer-const': 'error', // require const over let
		'prefer-destructuring': 'error', // require destructuring
		'prefer-object-spread': 'error', // require object spread
		'prefer-spread': 'error', // require spread operator
		'require-await': 'error', // require await in async function
		'sort-vars': 'error', // enforce sorted variable declarations
		yoda: 'error', // disallow yoda conditions
		'object-curly-spacing': ['error', 'always'] // enforce consistent spacing inside braces
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: {
					js: 'svelte-eslint-parser',
					ts: '@typescript-eslint/parser',
					tsx: '@typescript-eslint/parser',
					html: 'svelte-eslint-parser'
				}
			}
		},
		{
			files: ['*.ts', '*.d.ts', '*.svelte', '*.js'],
			excludedFiles: ['*.test.ts', '*.test.d.ts', '*.test.svelte', '*.test.js'],
			rules: {
				// Svelte rules
				'svelte/no-dupe-else-if-blocks': ['error'], // disallow duplicate else-if blocks
				'svelte/no-dupe-on-directives': ['error'], // disallow duplicate on directives
				'svelte/no-dupe-use-directives': ['error'], // disallow duplicate use directives
				'svelte/no-at-html-tags': ['off'], // warm when @html is used in expressions
				'svelte/button-has-type': ['warn', { button: true, submit: true, reset: true }], // warn when button element has no type attribute
				'svelte/no-at-debug-tags': ['error'], // disallow debugging syntax
				'svelte/no-ignored-unsubscribe': ['error'], // disallow ignoring store unsubscribe method
				'svelte/no-reactive-functions': ['error'], // disallow reactive functions as they add nothing to the reactivity
				'svelte/no-reactive-literals': ['error'], // disallow reactive declarations inside functions
				'svelte/no-unused-svelte-ignore': ['error'], // disallow unused svelte-ignore comments
				'svelte/no-useless-mustaches': [
					'error',
					{
						// disallow unnecessary mustaches
						ignoreIncludesComment: false,
						ignoreStringEscape: false
					}
				],
				'svelte/require-each-key': ['error'], // require each directive to have a key
				'svelte/first-attribute-linebreak': [
					'error',
					{
						// enforce first attribute line break
						multiline: 'below',
						singleline: 'beside'
					}
				],
				'svelte/html-closing-bracket-spacing': [
					'error',
					{
						// enforce html closing bracket spacing
						startTag: 'never', // <div>
						endTag: 'never', // </div>
						selfClosingTag: 'always' // <div />
					}
				],
				'svelte/html-quotes': [
					'error',
					{
						// enforce html attribute quotes
						prefer: 'double',
						dynamic: {
							quoted: false,
							avoidInvalidUnquotedInHTML: false
						}
					}
				],
				'svelte/max-attributes-per-line': [
					'error',
					{
						// limit attributes per line
						multiline: 1,
						singleline: 7
					}
				],
				'svelte/mustache-spacing': [
					'error',
					{
						// enforce mustache binding spacing
						textExpressions: 'never',
						attributesAndProps: 'never',
						directiveExpressions: 'never',
						tags: {
							openingBrace: 'never',
							closingBrace: 'never'
						}
					}
				],
				'svelte/no-spaces-around-equal-signs-in-attribute': ['error'],
				'svelte/shorthand-attribute': [
					'error',
					{
						// require shorthand attributes
						prefer: 'always'
					}
				],
				'svelte/shorthand-directive': [
					'error',
					{
						// require shorthand directives
						prefer: 'always'
					}
				],
				'svelte/spaced-html-comment': ['error', 'always'], // enforce spaced html comments
				'svelte/no-inner-declarations': ['error', 'functions'], // disallow inner declarations
				'svelte/no-trailing-spaces': ['error'], // disallow trailing spaces
				'svelte/sort-attributes': [
					'error',
					{
						// sort attributes
						order: [
							'slot',
							'this',
							'bind:this',
							'id',
							'name',
							'key',
							'type',
							'ref',
							'href',
							'target',
							'rel',
							{
								// other attributes. (Alphabetical order within the same group.)
								match: ['!/:/u', '!/^(?:this|id|name|style|class)$/u', '!/^--/u'],
								sort: 'alphabetical'
							},
							['/^bind:/u', '!bind:this', '/^on:/u'], // `bind:` directives (other then `bind:this`), and `on:` directives.
							{ match: '/^transition:/u', sort: 'alphabetical' }, // `transition:` directive.
							{ match: '/^in:/u', sort: 'alphabetical' }, // `in:` directive.
							{ match: '/^out:/u', sort: 'alphabetical' }, // `out:` directive.
							{ match: '/^animate:/u', sort: 'alphabetical' }, // `animate:` directive.
							{ match: '/^--/u', sort: 'alphabetical' }, // `--style-props` (Alphabetical order within the same group.)
							['style', '/^style:/u'], // `style` attribute, and `style:` directives.
							{ match: '/^let:/u', sort: 'alphabetical' }, // `let:` directives. (Alphabetical order within the same group.)
							'class',
							{ match: '/^class:/u', sort: 'alphabetical' }, // `class:` directives. (Alphabetical order within the same group.)
							{ match: '/^use:/u', sort: 'alphabetical' } // `use:` directives. (Alphabetical order within the same group.)
						]
					}
				],
				// TypeScript specific rules
				'@typescript-eslint/ban-ts-comment': [
					'error',
					{
						// enforce consistent ts-comment style
						'ts-expect-error': 'allow-with-description',
						'ts-ignore': true,
						'ts-nocheck': true,
						'ts-check': false,
						minimumDescriptionLength: 5
					}
				],
				'@typescript-eslint/consistent-type-imports': [
					'error',
					{
						// require types to be imported from their source
						prefer: 'type-imports',
						disallowTypeAnnotations: true
					}
				],
				'@typescript-eslint/no-explicit-any': 'error', // disallow the use of `any`
				'@typescript-eslint/no-non-null-assertion': ['warn'], // disallow non-null-assertions
				'@typescript-eslint/no-empty-interface': [
					'error',
					{
						// disallow empty interfaces
						allowSingleExtends: false
					}
				],
				'@typescript-eslint/array-type': ['warn'], // enforce the array type in array
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						// disallow unused variables
						vars: 'all', // check all variables
						args: 'after-used', // check function arguments
						ignoreRestSiblings: true, // ignore rest siblings
						argsIgnorePattern: '^_', // ignore args that start with underscore
						varsIgnorePattern: '^_' // ignore vars that start with underscore
						// varsIgnorePattern: '^\\$\\$(Props|Events|Slots)$',
					}
				],
				// Tailwind CSS
				'tailwindcss/classnames-order': 'warn', // enforce order of tailwind classes
				'tailwindcss/enforces-negative-arbitrary-values': 'error', // enforce negative arbitrary values -> e.g. -top-[5px] should become top-[-5px]
				'tailwindcss/enforces-shorthand': 'error', // enforce using shorthand tailwind classes when available -> e.g. mt4 instead of my-4 mx-4
				'tailwindcss/no-contradicting-classname': 'error', // disallow contradicting tailwind classes -> e.g. m-1 and m-1.5 should not be used together
				'tailwindcss/no-custom-classname': 'off', // disallow custom class names
				// Import sorting
				'import/first': 'error', // enforce imports to be declared first
				'import/no-absolute-path': 'error', // disallow the use of absolute paths in import
				'import/no-duplicates': 'error', // disallow duplicate imports
				'import/no-self-import': 'error', // disallow module to import itself
				'import/no-unresolved': 'off', // disallow unresolved imports
				'import/newline-after-import': ['error', { count: 1 }],
				'import/order': [
					'error',
					{
						'newlines-between': 'always',
						groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
						pathGroups: [
							{
								pattern: '$app/**/*',
								group: 'external',
								position: 'before'
							},
							{
								pattern: '^[$|@](lib/)?types(/(.*).(types|d).ts)?$',
								group: 'external',
								position: 'after'
							},
							{
								pattern: '[$|@](lib/)?(config|queries|services|utils)(/(.*))?$',
								group: 'internal',
								position: 'before'
							},
							{
								pattern: '[$|@](lib/)?stores(/(.*))?$',
								group: 'internal',
								position: 'after'
							},
							{
								pattern: '[$|@](lib/)?assets(/(.*))?$',
								group: 'parent',
								position: 'before'
							},
							{
								pattern: '[$|@](lib/)?styles(/(.*))?$',
								group: 'parent',
								position: 'before'
							},
							{
								pattern: '^[$|@](lib/)?comp(onents)?(/(.*))?$',
								group: 'parent',
								position: 'before'
							},
							{
								pattern: '{svelte,*.svelte}',
								group: 'parent',
								position: 'before'
							}
						],
						alphabetize: {
							order: 'asc',
							caseInsensitive: true
						}
					}
				]
			}
		}
	]
};
