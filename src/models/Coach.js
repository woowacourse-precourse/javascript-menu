const Error = require('../utils/error');
const {
  CoachNameListValidation,
  HateMenuListValidation,
} = require('../utils/Validation');

class Coach {
  #name;

  constructor(coachName) {
    this.#name = coachName;
  }

  static validateCoachNameList(coachNameList) {
    try {
      CoachNameListValidation.validation(coachNameList);
    } catch (error) {
      Error.throwError(error);

      return false;
    }

    return true;
  }

  static validateHateMenuList(hateMenuList) {
    try {
      HateMenuListValidation.validation(hateMenuList);
    } catch (error) {
      Error.throwError(error);

      return false;
    }

    return true;
  }

  getCoachName() {
    return this.#name;
  }
}

module.exports = Coach;
