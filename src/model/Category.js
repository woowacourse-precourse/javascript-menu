const { Random } = require('@woowacourse/mission-utils');

class Category {
  #menus;

  constructor(menus) {
    this.#menus = Category.#convertMenus(menus);
  }

  getRandomMenu() {
    const menu = Random.shuffle(this.#menus)[0];
    return menu;
  }

  static #convertMenus(menus) {
    return menus.replace(/ /g, '').split(',');
  }
}

module.exports = Category;
