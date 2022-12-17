const Menus = require('./Menus');

class Coach {
  #name;

  #cantEat;

  #menus = new Menus();

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
    this.#cantEat = menus;
  }

  isIncludeMenus(menu) {
    return this.#menus.contains(menu);
  }

  isIncludeCantEat(menu) {
    return this.#cantEat.includes(menu);
  }

  isCanRecommend(menu) {
    return !this.isIncludeMenus(menu) && !this.isIncludeCantEat(menu);
  }

  addToEat(menu) {
    this.#menus.add(menu);
  }

  toString() {
    return `[ ${this.#name} | ${this.#menus.toString()} ]`;
  }
}

module.exports = Coach;
