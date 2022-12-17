const { VALIDATION_MESSAGE, MENUS } = require('../constants');
const { GameError } = require('../errors');

class MenusCantEatValidator {
  static validateList(menus) {
    const validations = {
      range: MenusCantEatValidator.#isRangeValid,
      exist: MenusCantEatValidator.#isExist,
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

  static #isExist(menus) {
    const allMenus = Object.values(MENUS)
      .map(menuCategory => menuCategory.split(', '))
      .flat();

    const hasNotExistMenu = menus.some(menu => !allMenus.includes(menu));
    return !hasNotExistMenu;
  }
}

module.exports = MenusCantEatValidator;
