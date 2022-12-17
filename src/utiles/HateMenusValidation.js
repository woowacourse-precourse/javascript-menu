const { COACH } = require('../constants/Constants');
const HateMenusLengthError = require('../error/HateMenusError/HateMenusLengthError');

const HateMenusValidation = class {
  #hateMenus;

  check(hateMenus) {
    this.#hateMenus = hateMenus;

    this.#hateMenuLengthCheck();
  }

  #hateMenuLengthCheck() {
    if (this.#hateMenus.length > COACH.maxHateMenu)
      throw new HateMenusLengthError();
  }
};

module.exports = HateMenusValidation;
