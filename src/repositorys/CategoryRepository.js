const Category = require('../model/Category');
class CategoryRepository {
  #categories = new Map;

  addCategory(name, menus) {
    this.#categories.set(name, new Category(menus));
  }
}

module.exports = CategoryRepository;
