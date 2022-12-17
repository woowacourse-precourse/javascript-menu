const ErrorHandler = require('../libs/ErrorHandler');
const Shuffle = require('../libs/Shuffle');
const {
  CoachNameValidator,
  DislikeFoodsValidation,
} = require('../libs/Validator');

class Coach {
  #name;
  #dislikeFoods = [];
  #recommendedMenus = [];

  constructor(coachName) {
    this.#name = coachName;
  }

  getName() {
    return this.#name;
  }

  isMe(coachName) {
    return this.#name === coachName;
  }

  addDislikeFoods(dislikeFoods) {
    dislikeFoods
      .split(',')
      .forEach((dislikeFood) => this.#dislikeFoods.push(dislikeFood));
  }

  decideMenu(categoryMenus) {
    let recommendedMenu = Shuffle.getRandomMenu(categoryMenus);
    while (this.#dislikeFoods.includes(recommendedMenu)) {
      recommendedMenu = Shuffle.getRandomMenu(categoryMenus);
    }

    this.#recommendedMenus.push(recommendedMenu);
  }

  getRecommendedMenus() {
    return [this.#name, ...this.#recommendedMenus];
  }

  static validationCoachNames(coachNames) {
    try {
      CoachNameValidator.validation(coachNames);
    } catch (error) {
      ErrorHandler.throwError(error);
      return false;
    }
    return true;
  }

  static validationDislikeFoods(dislikeFoods, isExistInMenus) {
    try {
      DislikeFoodsValidation.validation(dislikeFoods, isExistInMenus);
    } catch (error) {
      ErrorHandler.throwError(error);
      return false;
    }
    return true;
  }
}

module.exports = Coach;
