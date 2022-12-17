const CategoryModel = require("../model/CategoryModel");

class CategoryController {
  #mainController;
  #categoryModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#categoryModel = new CategoryModel();
  }
}

module.exports = CategoryController;
