class Coach {
  #name;

  #menus;

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
}

module.exports = Coach;
