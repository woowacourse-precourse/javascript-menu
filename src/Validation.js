const { ERROR_MESSAGE, NUMBER } = require("./Constant");

const Validation = {
  validateNameLength(name) {
    if (Validation.isNameLengthTwoToFour(name)) {
      throw new Error(ERROR_MESSAGE.notValidNameLength);
    }
  },

  isNameLengthTwoToFour(name) {
    return (
      name.length >= NUMBER.minNameLength && name.length <= NUMBER.maxNameLength
    );
  },

  validateCoachNumber(coaches) {
    if (Validation.isCoachesTwoToFive(coaches)) {
      throw new Error(ERROR_MESSAGE.notValidCoachNumber);
    }
  },

  isCoachesTwoToFive(coaches) {
    return (
      coaches.length >= NUMBER.minCoachNumber &&
      coaches.length <= NUMBER.maxCoachNumber
    );
  },
};

module.exports = Validation;
