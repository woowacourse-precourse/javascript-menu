const Category = require('../model/Category');
const { Random } = require('@woowacourse/mission-utils');
class CategoryRepository {
  #categoryList = new Map();
  #categories = [];

  addCategory(name, menus) {
    this.#categories.push(name);
    this.#categoryList.set(name, new Category(menus));
  }

  getRandomCategory() {
    const category = this.#categories.get(Random.pickNumberInRange(1, 5));
    return category;
  }

  getRandomMenuByCategory(category) {
    return this.#categoryList.get(category).getRandomMenu();
  }
}

module.exports = CategoryRepository;
