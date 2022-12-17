const { REGEX, ERROR_MESSAGE } = require('./constants');

class InputException {
  static isCoachCountLimit(input) {
    const inputList = input.split(',');
    return inputList.length >= 2 && inputList.length <= 5;
  }

  static isCoachNameLimit(input) {
    const inputList = input.split(',');
    return inputList.every((item) => item.length >= 2 && item.length <= 4);
  }

  static isCoachName(input) {
    const inputList = input.split(',');
    return inputList.every((item) => REGEX.coach.test(item));
  }

  static checkCoach(input) {
    if (
      !(
        InputException.isCoachCountLimit(input) &&
        InputException.isCoachNameLimit(input) &&
        InputException.isCoachName(input)
      )
    ) {
      throw new Error(ERROR_MESSAGE.coach);
    }
  }
}

module.exports = InputException;
