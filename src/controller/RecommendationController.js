const RecommendationModel = require("../model/RecommendationModel");

class RecommendationController {
  #mainController;
  #recommendationModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#recommendationModel = new RecommendationModel();
  }
}

module.exports = RecommendationController;
