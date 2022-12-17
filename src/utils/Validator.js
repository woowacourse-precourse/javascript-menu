const { ERROR } = require('../data/Constants');
const IO = require('./IO');
const Utils = require('./Utils');

class Validator {
  static coachNameValidate(coach, from, to) {
    if (coach.length < from || coach.length > to) return true;
    return false;
  }

  static coachesNameValidate(coaches) {
    const coachesArr = Utils.divideString(coaches);
    coachesArr.forEach((coach) => {
      if (this.coachNameValidate(coach, 2, 4)) throw ERROR.COACH_NAME;
    });
  }

  static coachesNumberValidate(coaches) {
    const coachesArr = Utils.divideString(coaches);
    if (coachesArr.length < 2 || coachesArr.length > 5) {
      throw ERROR.COACH_NUMBER;
    }
  }

  static coachValidate(coaches) {
    this.coachesNumberValidate(coaches);
    this.coachesNameValidate(coaches);
  }

  static handleException(validateFunction, innerFunction, errorFunction) {
    try {
      validateFunction();
      innerFunction();
    } catch (error) {
      Validator.handleError(error, errorFunction);
    }
  }

  static handleError(error, callback) {
    IO.output(error);
    callback();
  }
}
module.exports = Validator;
