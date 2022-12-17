const CategoryController = require("./CategoryController");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const RecommendationController = require("./RecommendationController");

class MainController {
  #categoryController;
  #recommendationController;

  constructor() {
    this.#categoryController = new CategoryController(this);
    this.#recommendationController = new RecommendationController(this);
  }

  processCoachNameInput(coachNameInput) {
    this.#categoryController.processCoachNameInput(coachNameInput);
    this.readHateFoodInput();
  }

  readCoachNameInput() {
    InputView.readCoachNameInput(this.processCoachNameInput.bind(this));
  }

  printFirstMessage() {
    OutputView.printFirstMessage();
  }

  initializeRecommendation() {
    this.printFirstMessage();
    this.readCoachNameInput();
  }
}

module.exports = MainController;
