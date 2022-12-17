const { COACH_NAME } = require("../constants/Messages");

class CoachNameInputValidation {
  static validate(coachNameInput) {
    const splitCoachName = coachNameInput.split(",");
    if (2 > splitCoachName.length || splitCoachName.length > 5) {
      throw new Error(COACH_NAME.ERROR_NUMBER);
    }
    for (const singleName of splitCoachName) {
      if (2 > singleName.length || singleName.length > 4) {
        throw new Error(COACH_NAME.ERROR_LENGTH);
      }
    }
  }
}

module.exports = CoachNameInputValidation;
