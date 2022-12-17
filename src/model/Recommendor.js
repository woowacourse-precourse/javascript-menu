const CategoryMaker = require('../CategoryMaker');

class Recommendor {
  #coaches = [];
  #hateMenus = [];
  #categories = [];

  setCoaches(coaches) {
    this.#coaches = coaches;
  }

  getCoaches() {
    return this.#coaches;
  }

  setHateMenuLists(menus) {
    this.#hateMenus.push(menus);
  }

  setCategories() {
    this.#categories = CategoryMaker.makeCategory();
    return this.#categories;
  }

  recommend() {}
}

module.exports = Recommendor;
