const { AllCategory, ErrorMsg, StaticValues } = require("../static/Static");

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
    if (category.length !== StaticValues.EAT_TOGHTHER_DAYS)
      throw new Error(ErrorMsg.CATEGORY_COUNT);
  }

  getCategory() {
    return this.#category;
  }
}

module.exports = Category;
