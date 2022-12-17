const Validator = require('./Validator');
const { COACH, ERROR_MESSAGE } = require('./constants');

class InputValidator extends Validator {
  static validateCoachNamesInput(coachNamesInput) {
    if (
      InputValidator.hasDuplicateComma(coachNamesInput) ||
      InputValidator.hasCommaInFront(coachNamesInput) ||
      InputValidator.hasCommaInBack(coachNamesInput)
    ) {
      throw new Error(ERROR_MESSAGE.coachNamesInput);
    }
  }

  static validateCoachNames(coachNames) {
    if (InputValidator.hasDuplicateElements(coachNames))
      throw new Error(ERROR_MESSAGE.coachNamesDuplication);
    if (coachNames.length < COACH.min || coachNames.length > COACH.max)
      throw new Error(ERROR_MESSAGE.coachNum);
    coachNames.forEach((name) => {
      if (name.length < COACH.nameLengthMin || name.length > COACH.nameLengthMax)
        throw new Error(ERROR_MESSAGE.coachNameLength);
    });
  }
}

module.exports = InputValidator;
