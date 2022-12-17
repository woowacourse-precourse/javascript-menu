const { MENU_CONSTANTS } = require('../constants/Setting');
const Category = require('../model/Category');

class MenuRecommendController {
  #categories;

  constructor() {
    this.#initCategories();
  }

  #initCategories() {
    this.#categories = Object.entries(MENU_CONSTANTS)
      .map(
        ([category, menus]) => new Category(category, menus),
      );
  }

  run() {

  }
}

module.exports = MenuRecommendController;
