const CategoryController = require("./CategoryController");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const RecommendationController = require("./RecommendationController");
const { Console } = require("@woowacourse/mission-utils");

class MainController {
  #categoryController;
  #recommendationController;

  constructor() {
    this.#categoryController = new CategoryController(this);
    this.#recommendationController = new RecommendationController(this);
  }

  generateRecommendations() {
    this.#recommendationController.generateRecommendations(
      this.#categoryController.getCategories(),
    );
  }

  processCoachNameInput(coachNameInput) {
    this.#categoryController.processCoachNameInput(coachNameInput);
    const validCoachNames = this.#categoryController.getCoachNames();
    this.readHateFoodInput(validCoachNames, validCoachNames[0]);
  }

  processHateFoodInput(validCoachNames, singleCoachName, hateFoodInput) {
    this.#recommendationController.processHateFoodInput(
      validCoachNames,
      singleCoachName,
      hateFoodInput,
    );
  }

  readCoachNameInput() {
    InputView.readCoachNameInput(this.processCoachNameInput.bind(this));
  }

  readHateFoodInput(validCoachNames, coachName) {
    InputView.readHateFoodInput(
      validCoachNames,
      coachName,
      this.processHateFoodInput.bind(this),
    );
  }

  printFirstMessage() {
    OutputView.printFirstMessage();
  }

  printError(errorLog) {
    OutputView.printError(errorLog);
  }

  printResult(categories, overallInformation) {
    OutputView.printResult(categories, overallInformation);
    this.finishRecommendation();
  }

  finishRecommendation() {
    Console.close();
  }

  initializeRecommendation() {
    this.printFirstMessage();
    this.readCoachNameInput();
  }
}

module.exports = MainController;
