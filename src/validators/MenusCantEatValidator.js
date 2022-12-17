const { VALIDATION_MESSAGE } = require('../constants');
const { GameError } = require('../errors');

// 각 코치가 못 먹는 음식은 0~2개 이며,
// 해당 경계에 포함되지 않는 케이스가 있다면 에러 throw

class MenusCantEatValidator {
  static validateList(menus) {
    const validations = {
      range: MenusCantEatValidator.#isRangeValid,
    };

    Object.entries(validations).forEach(([key, validateFunc]) => {
      MenusCantEatValidator.#validate(menus, validateFunc, VALIDATION_MESSAGE.menus[key]);
    });
  }

  static #validate(menus, validateFunc, errorMessage) {
    if (!validateFunc(menus)) {
      throw new GameError(errorMessage);
    }
  }

  static #isRangeValid({ length }) {
    return length >= 0 && length <= 2;
  }
}

module.exports = MenusCantEatValidator;
