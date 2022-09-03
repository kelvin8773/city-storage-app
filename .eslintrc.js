module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks', 'eslint-plugin-import', 'jest'],
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': 'warn'
  }
};
