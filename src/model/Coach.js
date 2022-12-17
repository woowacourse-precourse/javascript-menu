class Coach {
  #name;

  #excludeFood = null;

  constructor(name) {
    this.#name = name;
  }

  setExcludeFood(foods) {
    this.#excludeFood = foods;
  }

  getCoach() {
    return { name: this.#name, excludeFood: this.#excludeFood };
  }
}

module.exports = Coach;
