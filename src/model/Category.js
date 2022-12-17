const { Random } = require('@woowacourse/mission-utils');

class Category {
  #menus;

  constructor(menus) {
    this.#menus = Category.#convertMenus(menus);
  }

  getRandomMenu() {
    const index = Random.shuffle(
      Array.from(
        { length: this.#menus.length },
        (value, index) => index + 1,
      ),
    )[0];
    return this.#menus[index - 1];
  }

  static #convertMenus(menus) {
    return menus.split(', ');
  }
}

module.exports = Category;
