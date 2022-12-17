const ERROR_CODE = Object.freeze({

  WRONG_FORMAT: 'WRONG_FORMAT',
  WRONG_COUNT: 'WRONG_COUNT',
  WRONG_NAME_LENGTH: 'WRONG_NAME_LENGTH',
});

const ERROR_MESSAGE = Object.freeze({

  WRONG_FORMAT: '[ERROR] 잘못된 형식입니다.',
  WRONG_COUNT: '[ERROR] 2명 이상 5명 이하의 코치 수를 입력해주세요.',
  WRONG_NAME_LENGTH: '[ERROR] 코치 이름은 2글자 이상 4글자 이하로 입력해주세요.',

});

const createParams = (code, value) => [ERROR_MESSAGE[code], { cause: { code, value } }];

class CustomError extends Error {
  constructor(code, value = null) {
    super(...createParams(code, value));
  }
}

module.exports = { CustomError, ERROR_CODE };
