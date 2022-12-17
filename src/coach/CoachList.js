const Coach = require('./Coach');
const Category = require('../selector/Category');

class CoachList {
  #list = {};

  #categories;

  add(name, cannotEat) {
    this.#list[name] = new Coach(cannotEat);
  }

  selectCategories(length) {
    this.#categories = Category.randomCategory(length);
    return [...this.#categories];
  }

  getMenu(name, menu) {
    return this.#list[name].determineMenu(this.#categories.length, this.#categories, menu);
  }
}

module.exports = CoachList;
