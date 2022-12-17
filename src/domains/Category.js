const Menu = require('./Menu');

class Category {
  /** @type {number} */
  #id;

  /** @type {string} */
  #name;

  /** @type {Menu[]} */
  #menus;

  /**
   * @param {number} id
   * @param {string} name
   * @param {Menu[]} menus
   */
  constructor(id, name, menus) {
    this.#id = id;
    this.#name = name;
    this.#menus = menus;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getMenus() {
    return this.#menus;
  }

  /**
   * @param {string} menuName
   */
  getMenu(menuName) {
    return this.#menus.find((menu) => menu.getName() === menuName) ?? null;
  }
}

module.exports = Category;
