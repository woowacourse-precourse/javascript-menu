const Error = require('../utils/error');
const {
  CoachNameListValidation,
  HateMenuListValidation,
} = require('../utils/Validation');
const Shuffle = require('../utils/Shuffle');

class Coach {
  #name;
  #hateMenuList = [];
  #recommendedMenuList = [];

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

  getCorrectCoachName(coachName) {
    return this.#name === coachName;
  }

  addHateMenuList(hateMenuList) {
    hateMenuList.split(',').forEach((hateMenu) => {
      this.#hateMenuList.push(hateMenu);
    });
  }

  recommendMenu(menuList) {
    let decidedMenu = Shuffle.getRandomMenu(menuList);

    while (this.#hateMenuList.includes(decidedMenu)) {
      decidedMenu = Shuffle.getRandomMenu(menuList);
    }

    this.#recommendedMenuList.push(decidedMenu);
  }
}

module.exports = Coach;
