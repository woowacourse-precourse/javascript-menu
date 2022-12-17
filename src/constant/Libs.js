const Validation = require('../model/Validation');

const UTIL = '@woowacourse/mission-utils';

const Validate = {
  CoachName(value) {
    new Validation(value).getStringValidator().isSplit(',').getMessages();
    new Validation(value.split(','))
      .getArrayValidator()
      .isRepeated()
      .isLength(2, 5)
      .isArrayElementInRange(2, 4)
      .getMessages();
  },

  CoachNotEat(value) {
    new Validation(value.split(',')).getArrayValidator().isRepeated().isLength(0, 2).getMessages();
  },
};
module.exports = { UTIL, Validate };
