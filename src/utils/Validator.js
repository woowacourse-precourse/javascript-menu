const { ERROR } = require('../data/Constants');
const IO = require('./IO');
const Utils = require('./Utils');

class Validator {
  static coachValidate(coaches) {}

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
