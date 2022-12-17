const { Random } = require('@woowacourse/mission-utils');

class Category {
  #menus;

  constructor(menus) {
    this.#menus = Category.#convertMenus(menus);
  }

  getRandomMenu() {
    const menu = Random.shuffle(this.#menus)[0];
    return this.#menus[menu - 1];
  }

  static #convertMenus(menus) {
    return menus.split(', ');
  }
}

module.exports = Category;
