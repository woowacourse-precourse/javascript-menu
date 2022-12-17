class Coach {
  #name;
  #pickyFoods;

  constructor(name) {
    this.#name = name;
  }

  setPickyFoods(foods) {
    this.#pickyFoods = foods;
  }
}

module.exports = Coach;
