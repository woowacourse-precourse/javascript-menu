class Coach {
  #name;
  #hateFoods = [];

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getHateFoods() {
    return Object.freeze(this.#hateFoods);
  }

  setHateFoods(foods) {
    this.#hateFoods = foods;
  }
}

module.exports = Coach;
