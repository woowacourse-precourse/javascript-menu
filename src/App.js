const Recommendation = require("./controller/recommandation");

class App {
  #recommendation;
  constructor() {
    this.#recommendation = new Recommendation();
  }
  play() {
    this.#recommendation.start();
  }
}

module.exports = App;
