const CategoryController = require("./CategoryController");
const InputView = require("../view/InputView");
const RecommendationController = require("./RecommendationController");

class MainController {
  #categoryController;
  #recommendationController;

  constructor() {
    this.#categoryController = new CategoryController(this);
    this.#recommendationController = new RecommendationController(this);
  }

  initializeRecommendation() {}
}

module.exports = MainController;
