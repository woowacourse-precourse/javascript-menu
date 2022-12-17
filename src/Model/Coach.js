class Coach {
  #name;
  #hateFoods;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setHateFoods(hateFoods) {
    this.#hateFoods = [...hateFoods];
  }
}

module.exports = Coach;
