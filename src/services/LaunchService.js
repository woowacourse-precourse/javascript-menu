const Category = require('../domains/Category');
const Menu = require('../domains/Menu');

class LaunchService {
  /** @type {Category[]} */
  #categories;

  /** @type {Menu[]} */
  #menus;

  /**
   * @param {Category[]} categories
   */
  constructor(categories) {
    this.#categories = categories;
    this.#menus = categories.flatMap((category) => category.getMenus());
  }

  getCategories() {
    return this.#categories;
  }

  getMenus() {
    return this.#menus;
  }

  /**
   * @param {number} id
   */
  getCategory(id) {
    return this.#categories.find((category) => category.getId() === id) ?? null;
  }

  /**
   * @param {string} name
   */
  getCategoryByName(name) {
    return this.#categories.find((category) => category.getName() === name) ?? null;
  }
}

module.exports = LaunchService;
