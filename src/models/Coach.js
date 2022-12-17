const ErrorHandler = require('../libs/ErrorHandler');
const {
  CoachNameValidator,
  DislikeFoodsValidation,
} = require('../libs/Validator');

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

  static validationDislikeFoods(dislikeFoods) {
    try {
      DislikeFoodsValidation.validation(dislikeFoods);
    } catch (error) {
      ErrorHandler.throwError(error);
      return false;
    }
    return true;
  }
}

module.exports = Coach;
