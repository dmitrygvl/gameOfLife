module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  ignorePatterns: ['main.js'],
  rules: {
    'max-len': [
      'error',
      {
        code: 140,
        ignoreComments: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/prefer-default-export': 'off',
    'no-promise-executor-return': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'import/no-unresolved': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1624
    'import/extensions': ['warn', 'never'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
  },
};
