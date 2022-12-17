const ErrorHandler = require('../libs/ErrorHandler');
const { CoachNameValidator } = require('../libs/Validator');

class Coach {
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
