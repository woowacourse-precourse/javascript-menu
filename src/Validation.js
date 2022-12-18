const { ERROR_MESSAGE, NUMBER } = require("./Constant");

const Validation = {
  validateNameLength(name) {
    if (!Validation.isNameLengthTwoToFour(name)) {
      throw new Error(ERROR_MESSAGE.notValidNameLength);
    }
  },

  isNameLengthTwoToFour(name) {
    return (
      name.length >= NUMBER.minNameLength && name.length <= NUMBER.maxNameLength
    );
  },

  validateCoachNumber(coaches) {
    if (!Validation.isCoachesInRange(coaches)) {
      throw new Error(ERROR_MESSAGE.notValidCoachNumber);
    }
  },

  isCoachesInRange(coaches) {
    return (
      coaches.length >= NUMBER.minCoachNumber &&
      coaches.length <= NUMBER.maxCoachNumber
    );
  },

  validatePickyFoods(foods) {
    if (!Validation.isFoodNumberInRange(foods)) {
      throw new Error(ERROR_MESSAGE.notValidPickyFoodNumber);
    }
  },

  isFoodNumberInRange(foods) {
    return foods.length <= 2;
  },
};

module.exports = Validation;
