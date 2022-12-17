const { ERROR_MESSAGE, NUMBER } = require("./Constant");

const Validation = {
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
