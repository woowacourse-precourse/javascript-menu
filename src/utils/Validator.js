const { REGEX } = require('../constants');

const ERROR_MESSAGE = {
  INVALID_COACHES_NAME: '코치의 이름은 2글자 이상 4글자 이하의 한글 또는 영문으로 입력해주세요.',
  INVALID_COACHES_LENGTH: '2명 이상 5명 이하의 이름을 입력해주세요.',
};

const Validator = {
  throwErrorIfInvalidCoachesName(names) {
    if (!REGEX.COACHES_NAME.test(names)) throw new Error(ERROR_MESSAGE.INVALID_COACHES_NAME);

    const coaches = names.replace(REGEX.SPACE, '').split(',');
    if (coaches.length < 2 || coaches.length > 5) {
      throw new Error(ERROR_MESSAGE.INVALID_COACHES_LENGTH);
    }
  },
};

module.exports = Validator;
