const { REGEX, ERROR_MESSAGE } = require('./constants');

class InputException {
  // coachInput
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

  static makeSampleSet(SAMPLE) {
    const sampleItem = Object.values(SAMPLE);

    return new Set(sampleItem.flatMap((item) => item.split(', ')));
  }

  static isInMenu(input, SAMPLE) {
    const inputList = input.split(',');
    return inputList.every((item) =>
      InputException.makeSampleSet(SAMPLE).has(item)
    );
  }

  static isNotEatLimit(input) {
    const inputList = input.split(',');
    return inputList.length >= 0 && inputList.length <= 2;
  }

  // notEatInput
  static checkNotEat(input, SAMPLE) {
    if (
      !(
        InputException.isNotEatLimit(input) &&
        InputException.isInMenu(input, SAMPLE)
      )
    ) {
      throw new Error(ERROR_MESSAGE.notEat);
    }
  }
}

module.exports = InputException;
