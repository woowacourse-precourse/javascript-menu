const ErrorHandler = require('../validation/ErrorHandler');
const CoachNameValidator = require('../validation/CoachNameValidator');

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
