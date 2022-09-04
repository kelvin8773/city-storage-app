module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks', 'eslint-plugin-import', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': 'warn',
    'react/no-unknown-property': [0]
  }
};
