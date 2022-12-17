module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 0,
    'class-methods-use-this': 0,
    'no-undef': 0,
    'no-new': 0,
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
  },
};
