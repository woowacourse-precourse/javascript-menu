const ErrorHandler = require('../libs/ErrorHandler');
const { CoachNameValidator } = require('../libs/Validator');

class Coach {
  #name;
  #dislikeFood = [];

  constructor(coachName) {
    this.#name = coachName;
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
}

module.exports = Coach;
