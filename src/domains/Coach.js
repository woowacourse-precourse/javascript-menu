const AppValidationError = require('../errors/AppValidationError');
const Menu = require('./Menu');

class Coach {
  /** @type {string} */
  #name;

  /** @type {Menu[]} */
  #dislikeMenus = [];

  /** @type {Menu[]} */
  #suggestedMenus = [];

  /**
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
    this.#validate();
  }

  #validate() {
    if (this.#name.length < 2 || this.#name.length > 4) {
      throw new AppValidationError('코치의 이름은 최소 2글자, 최대 4글자여야 합니다.');
    }
  }

  getName() {
    return this.#name;
  }

  /**
   * @param {Menu[]} dislikeMenus
   */
  setDislikeMenus(dislikeMenus) {
    if (dislikeMenus.length > 2) {
      throw new AppValidationError('못 먹는 메뉴는 최소 0개, 최대 2개여야 합니다.');
    }
    this.#dislikeMenus = dislikeMenus;
  }

  getDislikeMenus() {
    return this.#dislikeMenus;
  }

  /**
   * @param {Menu} menu
   */
  isDislikeMenu(menu) {
    return this.#dislikeMenus.includes(menu);
  }

  /**
   * @param {Menu} menu
   */
  addSuggestedMenu(menu) {
    this.#suggestedMenus.push(menu);
  }

  /**
   * @param {Menu} menu
   */
  isSuggestedMenu(menu) {
    return this.#suggestedMenus.includes(menu);
  }
}

module.exports = Coach;
