module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    // "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jest"],
  ignorePatterns: ["main.js"],
  rules: {
    "max-len": [
      "error",
      {
        code: 140,
        ignoreComments: true,
      },
    ],
    "import/prefer-default-export": "off",
    "no-promise-executor-return": "off",
  },
};
