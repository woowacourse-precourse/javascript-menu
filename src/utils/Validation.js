const { ERROR, ZERO } = require('../utils/constants');

const Validation = {
  checkBlank(input) {
    if (input.length === ZERO) {
      throw ERROR.mustNotBeBlank;
    }
  },

  checkStringType(input) {
    if (!Number.isNaN(Number(input))) {
      throw ERROR.mustBeStringType;
    }
  },

  checkValidLengthOfCoaches(coaches) {
    coaches = coaches.split(',');
    if (coaches.length < 2 || coaches.length > 5) {
      throw ERROR.mustBeValidLengthOfCoaches;
    }
  },
};

module.exports = Validation;
