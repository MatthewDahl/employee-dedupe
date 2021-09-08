/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['tests/**/*.js', 'tests/**/*.ts'],
      env: { jest: true },
      extends: 'plugin:jest/recommended',
      plugins: ['jest'],
    },
  ],
};
