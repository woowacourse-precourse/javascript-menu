const ERROR_MESSAGES = require("./constant/ErrorMessages");

class Validator {
  static isRightCoachName(min, max, coachNames) {
    for (const name of coachNames) {
      if (name.length < min || name.length > max)
        throw new Error(ERROR_MESSAGES.notRightCoachName);
    }
  }

  static isRightCoachesNumber(min, max, coaches) {
    if (coaches.length < min || coaches.length > max)
      throw new Error(ERROR_MESSAGES.notRightCoachesNumber);
  }
}

module.exports = Validator;
