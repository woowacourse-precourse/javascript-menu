const Category = require('../model/Category');
const { Random } = require('@woowacourse/mission-utils');
class CategoryRepository {
  #categoryList = new Map();
  #categories = new Map();
  #categoryCount = 1;

  addCategory(name, menus) {
    this.#categories.set(this.#categoryCount, name);
    this.#categoryList.set(name, new Category(menus));
    this.#categoryCount += 1;
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
