const { makeCategory } = require("../utils/CategoryMaker");

class Category {
  #categories = [];

  constructor() {
    this.#categories = [];
  }

  generateCategory() {
    this.#categories = makeCategory(this.#categories);
  }

  getData() {
    return this.#categories;
  }
}

module.exports = Category;
