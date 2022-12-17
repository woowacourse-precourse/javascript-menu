const ErrorHandler = require('../validation/ErrorHandler');
const { CoachNameValidator, DislikeFoodsValidation } = require('../validation/Validator');

class Coach {
  #name;
  #dislikeFoods = [];

  constructor(coachName) {
    this.#name = coachName;
  }

  getName() {
    return this.#name;
  }

  static validationCoachNames(coachNames) {
    try {
      CoachNameValidator.validation(coachNames);
    } catch (error) {
      ErrorHandler.throwError(error);
      return false;
    }
    return true;
  }

  static validationDislikeFoods(dislikeFoods, isExistInMenus) {
    try {
      DislikeFoodsValidation.validation(dislikeFoods, isExistInMenus);
    } catch (error) {
      ErrorHandler.throwError(error);
      return false;
    }
    return true;
  }
}

module.exports = Coach;
