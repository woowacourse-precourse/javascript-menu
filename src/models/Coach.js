const Error = require('../utils/error');
const { CoachNameListValidation } = require('../utils/Validation');

class Coach {
  static validateCoachNameList(coachNameList) {
    try {
      CoachNameListValidation.validation(coachNameList);
    } catch (error) {
      Error.throwError(error);

      return false;
    }

    return true;
  }
}

module.exports = Coach;
