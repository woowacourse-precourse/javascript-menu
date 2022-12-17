const RecommendationModel = require("../model/RecommendationModel");
const HateFoodInputValidation = require("../validation/HateFoodInputValidation");

class RecommendationController {
  #mainController;
  #recommendationModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#recommendationModel = new RecommendationModel();
  }

  processHateFoodInput(validCoachNames, singleCoachName, hateFoodInput) {
    try {
      HateFoodInputValidation.validate(hateFoodInput);
      this.#recommendationModel.generateCoach(singleCoachName, hateFoodInput.split(","));
      if (validCoachNames.indexOf(singleCoachName) !== validCoachNames.length - 1) {
        this.#mainController.readHateFoodInput(
          validCoachNames,
          validCoachNames[validCoachNames.indexOf(singleCoachName) + 1],
        );
      }
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
      this.#mainController.readHateFoodInput(validCoachNames, singleCoachName);
    }
  }
}

module.exports = RecommendationController;
