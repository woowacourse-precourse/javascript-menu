const CustomError = require('./CustomError');

const InputValidator = {
  checkNameLength(input) {
    input.split(',').forEach((name) => {
      if (name.length < 2 || name.length > 4) {
        throw new CustomError('코치의 이름은 최소 2글자 최대 4글자여야 합니다.');
      }
    });
  },
  checkCoachNumber(input) {
    const coachNumber = input.split(',').length;
    if (coachNumber < 2 || coachNumber > 5) {
      throw new CustomError('코치는 최소 2명 최대 5명 입력 가능합니다.');
    }
  },
  checkExcludeFoodNumber(input) {
    const foodNumber = input.split(',').length;
    if (foodNumber > 2) {
      throw new CustomError('먹지 못하는 메뉴는 최소 0개 최대 2개여야 합니다.');
    }
  },
};

module.exports = InputValidator;
