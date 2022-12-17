const { RESULT } = require('../util/constants/string');

class Coach {
  #name;
  #inedible = [];
  #recommendation = [];

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getInedible() {
    return this.#inedible;
  }

  getRecommendation() {
    return this.#recommendation;
  }

  addInedible(menu) {
    this.#inedible.push(menu);
  }

  addMenu(menu) {
    this.#recommendation.push(menu);
    this.checkDeleteInedibleMenu(this.#recommendation, this.#inedible);
  }

  checkDeleteInedibleMenu(recommendation, inedible) {
    const inedibleDeleted = recommendation.filter(
      (menu) => !inedible.includes(menu)
    );
    this.#recommendation = inedibleDeleted;
  }
}

module.exports = Coach;
