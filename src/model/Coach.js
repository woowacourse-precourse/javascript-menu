class Coach {
  #name;
  #notGoodFood;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setNotGoodFood(notGoodFood) {
    this.#notGoodFood = notGoodFood;
  }

  getNotGoodFood() {
    return this.#notGoodFood;
  }
}

module.exports = Coach;
