class Coach {
  #name;
  #pickyFoods;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setPickyFoods(foods) {
    this.#pickyFoods = foods;
  }
}

module.exports = Coach;
