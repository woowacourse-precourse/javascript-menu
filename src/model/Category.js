class Category {
  #name;
  #menus;

  constructor(name, menus) {
    this.#name = name;
    this.#menus = Category.#convertMenus(menus);
  }
  getName() {
    return this.#name;
  }

  getRandomMenu() {
  }

  static #convertMenus(menus) {
    return menus.replace(/ /g, '').split(',');
  }
}

module.exports = Category;
