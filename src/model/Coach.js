const { RESULT } = require('../util/constants/string');

class Coach {
  #name;
  #inedible;
  #recommendation;

  constructor(name) {
    this.#name = name;
    this.inedible = [];
    this.#recommendation = [];
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
    const menuSet = new Set(this.#recommendation);
    if (menuSet.size === this.#recommendation.length) {
      return RESULT.noDuplicates;
    }
    this.#recommendation.pop();
    return RESULT.hasDuplicates;
  }
}

module.exports = Coach;
