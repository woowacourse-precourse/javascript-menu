const { HATE_FOOD } = require("../constants/Messages");

class HateFoodInputValidation {
  static validate(hateFoodInput) {
    const splitHateFood = hateFoodInput.split(",");
    if (splitHateFood.length > 2) {
      throw new Error(HATE_FOOD.ERROR);
    }
  }
}

module.exports = HateFoodInputValidation;
