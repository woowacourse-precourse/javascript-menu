const RecommendationModel = require("../model/RecommendationModel");
const HateFoodInputValidation = require("../validation/HateFoodInputValidation");

class RecommendationController {
  #mainController;
  #recommendationModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#recommendationModel = new RecommendationModel();
  }

  makeAnotherCoach(validCoachNames, singleCoachName) {
    this.#mainController.readHateFoodInput(
      validCoachNames,
      validCoachNames[validCoachNames.indexOf(singleCoachName) + 1],
    );
  }

  processHateFoodInput(validCoachNames, singleCoachName, hateFoodInput) {
    try {
      HateFoodInputValidation.validate(hateFoodInput);
      this.#recommendationModel.generateCoach(singleCoachName, hateFoodInput.split(","));
      if (validCoachNames.indexOf(singleCoachName) !== validCoachNames.length - 1) {
        this.makeAnotherCoach(validCoachNames, singleCoachName);
      }
      if (validCoachNames[validCoachNames.length - 1] === singleCoachName)
        this.#mainController.generateRecommendations();
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
      this.#mainController.readHateFoodInput(validCoachNames, singleCoachName);
    }
  }

  generateRecommendations(categories) {
    this.#recommendationModel.generateRecommendations(categories);
    const overallInformation = this.#recommendationModel.getOverallCoachInformation();
    this.#mainController.printResult(categories, overallInformation);
  }
}

module.exports = RecommendationController;
