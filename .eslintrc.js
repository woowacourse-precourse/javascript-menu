module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 주어진 문제의 들여쓰기 제한을 확인하기
    'max-depth': ['error', 2],
    // 주어진 문제의 최대 객체 가능 수 확인하기
    'max-params': ['error', 3],
    // 주어진 문제의 최대 함수 길이 확인하기
    'max-lines-per-function': ['error', { max: 10 }],
  },
};
