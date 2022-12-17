const Menus = require('./Menus');

class Coach {
  #name;

  #menus;

  #toEat = new Menus();

  constructor(name) {
    Coach.#validate(name);
    this.#name = name;
  }

  static #validate(name) {
    if (Coach.#isOutOfRange(name)) {
      throw Error('[ERROR] 코치 이름은 최소 2글자, 최대 4글자여야 합니다.');
    }
  }

  static #isOutOfRange(name) {
    return name.length < 2 || name.length > 4;
  }

  getName() {
    return this.#name;
  }

  setMenus(menus) {
    this.#menus = menus;
  }

  isIncludeToEat(menu) {
    return this.#toEat.contains(menu);
  }

  isIncludeMenus(menu) {
    return this.#menus.includes(menu);
  }

  isCanRecommend(menu) {
    return !this.isIncludeMenus(menu) && !this.isIncludeToEat(menu);
  }

  addToEat(menu) {
    this.#toEat.add(menu);
  }

  toString() {
    return `[ ${this.#name} | ${this.#toEat.toString()} ]`;
  }
}

module.exports = Coach;
