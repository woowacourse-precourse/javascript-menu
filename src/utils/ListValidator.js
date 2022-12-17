const CustomError = require('./CustomError');

const ListValidator = {
  isDuplicate(list) {
    const set = new Set(list);
    return list.length !== set.size;
  },

  validate(list, min, max) {
    if (ListValidator.isDuplicate(list)) {
      throw new CustomError('중복된 값을 입력하였습니다.');
    }

    if (ListValidator.isOutOfRange(list, min, max)) {
      throw new CustomError(`개수는 ${min}이상 ${max}이하여야 합니다.`);
    }
  },

  isOutOfRange(list, min, max) {
    return list.length < min || list.length > max;
  },
};

module.exports = ListValidator;
