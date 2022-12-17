const { ERROR_CODE, CustomError } = require('./Error');
const OutputView = require('./OutputView');

class Validator {
  static coachNames(callback, { onError: errorCallback }) {
    return (coachNames) => {
      try {
        this.#validateCoachNames(coachNames);
        callback(coachNames);
      } catch (error) {
        OutputView.printMessage(error.message);
        errorCallback(callback);
      }
    };
  }

  static #validateCoachNames(coachNames) {
    if (coachNames.split(',').length === 1) {
      throw new CustomError(ERROR_CODE.WRONG_FORMAT);
    }

    console.log(coachNames.split(',').length);
    if (coachNames.split(',').length < 2 || coachNames.split(',').length > 5) {
      throw new CustomError(ERROR_CODE.WRONG_COUNT);
    }

    const names = coachNames.split(',');

    if (names.some((name) => name.length < 2 || name.length > 4)) {
      throw new CustomError(ERROR_CODE.WRONG_NAME_LENGTH);
    }
  }
}

module.exports = Validator;
