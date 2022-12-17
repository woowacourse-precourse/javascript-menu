const Coach = require("./Coach");

class RecommendationModel {
  #coaches;
  constructor() {
    this.#coaches = [];
  }

  generateCoach(name, hateFood) {
    this.#coaches.push(new Coach(name, hateFood));
  }
}

module.exports = RecommendationModel;
