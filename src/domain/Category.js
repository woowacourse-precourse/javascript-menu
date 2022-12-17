const { AllCategory, ErrorMsg } = require("../static/Static");

class Category {
  #category;

  constructor(category) {
    this.validate(category);

    this.#category = category;
  }

  validate(category) {
    category.forEach((c) => {
      if (!AllCategory.includes(c))
        throw new Error(ErrorMsg.CATEGORY_NOT_EXIST);
    });
  }

  getCategory() {
    return this.#category;
  }
}

module.exports = Category;
