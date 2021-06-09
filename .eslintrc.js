module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    'arrow-parens': ['off', 'always'],
    eqeqeq: ['error', 'always'],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'quote-props': ['error', 'as-needed'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': ['off', 'never'],
    'use-isnan': 'error',
    'valid-typeof': 'off',
    'react/jsx-curly-spacing': [
      'warn',
      {
        attributes: { when: 'never' },
        children: { when: 'never' },
        allowMultiline: true,
      },
    ],
    'react/jsx-one-expression-per-line': ['off', { allow: 'single-child' }],
  },
};
