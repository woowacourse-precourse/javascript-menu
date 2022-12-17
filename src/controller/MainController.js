const CategoryController = require("./CategoryController");

class MainController {
  #categoryController;
  #recommendationController;

  constructor() {
    this.#categoryController = new CategoryController(this);
    this.#recommendationController = new this.#recommendationController(this);
  }

  initializeRecommendation() {}
}

module.exports = MainController;
