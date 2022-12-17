const { VALIDATION_MESSAGE } = require('../constants');
const { GameError } = require('../errors');

class NameValidator {
  static validateList(nameList) {
    const validations = {
      range: NameValidator.#isRangeValid,
      length: NameValidator.#isLengthValid,
    };

    Object.entries(validations).forEach(([key, validateFunc]) => {
      NameValidator.#validate(nameList, validateFunc, VALIDATION_MESSAGE.name_list[key]);
    });
  }

  static #validate(nameList, validateFunc, errorMessage) {
    if (!validateFunc(nameList)) {
      throw new GameError(errorMessage);
    }
  }

  static #isRangeValid({ length }) {
    return length >= 2 && length <= 5;
  }

  static #isLengthValid(nameList) {
    const isOutOfRange = ({ length }) => length < 2 || length > 4;
    return !nameList.some(isOutOfRange);
  }
}

module.exports = NameValidator;
