const Menu = require('../model/Menu');

class Category {
  constructor(categoryName, menus) {
    this.name = categoryName;
    this.menus = menus
      .map((menuName) => new Menu(menuName, categoryName));
  }

  /**
   * return munus name
   * @returns string
   */
  getMenus() {
    return this.menus.map((menu) => menu.getName());
  }

  has(menuName) {
    return this.menus.some((menu) => menu.getName() === menuName);
  }

  getName() {
    return this.name;
  }
}

module.exports = Category;
