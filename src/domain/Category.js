class Category {
  #category;

  constructor(category) {
    this.#category = category;
  }

  getCategory() {
    return this.#category;
  }
}

module.exports = Category;
