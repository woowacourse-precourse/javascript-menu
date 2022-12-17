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

  processCoachNameInput() {
    this.#categoryController.processCoachNameInput();
    this.readHateFoodInput();
  }

  readCoachNameInput() {
    InputView.readCoachNameInput(this.processCoachNameInput.bind(this));
  }

  initializeRecommendation() {
    this.readCoachNameInput();
  }
}

module.exports = MainController;
