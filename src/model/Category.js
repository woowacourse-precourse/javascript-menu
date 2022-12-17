const { Random } = require('@woowacourse/mission-utils');

class Category {
  #menus;

  constructor(menus) {
    this.#menus = Category.#convertMenus(menus);
  }

  getRandomMenu() {
    const index = Random.shuffle(Array.from(
      { length: this.#menus.length },
      (value, index) => index,
    ))[0];
    return this.#menus[index];
  }

  static #convertMenus(menus) {
    return menus.replace(/ /g, '').split(',');
  }
}

module.exports = Category;
