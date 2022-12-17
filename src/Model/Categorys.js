const CategoryRandomNumberGenerator = require("../CategoryRandomNumberGenerator");

class Categorys {
  #categorys = [];

  constructor(categorysNames) {
    this.categorysNames = categorysNames;
  }

  get() {
    return this.#categorys;
  }

  saveCategory() {
    Array.from({ length: 5 }).forEach((_, i) => {
      this.#decideCategory();
    });
  }

  #decideCategory() {
    const categoryName = this.#getCategoryName();

    if (this.#getCategoryCount(categoryName) <= 2) {
      this.#categorys.push(categoryName);
      return;
    }
    this.#decideCategory();
  }

  #getCategoryCount(target) {
    return this.#categorys.reduce((count, category) => {
      if (target === category) {
        return (count += 1);
      }
      return count;
    }, 0);
  }

  #getCategoryName() {
    return this.categorysNames[CategoryRandomNumberGenerator.generate() - 1];
  }
}

module.exports = Categorys;
