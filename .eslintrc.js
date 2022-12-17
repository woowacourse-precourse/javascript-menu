module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['airbnb', 'plugin:jsdoc/recommended'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-process-exit': 'error',
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],

    // JSDoc과 관련된 오류 침묵
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-yield': 'off',
  },
  overrides: [
    // 테스트 파일을 대상으로 일부 규칙 비활성화
    {
      files: ['__tests__/**/*.js'],
      rules: {
        'max-lines-per-function': 'off',
        'no-new': 'off',
      },
    },
  ],
};
