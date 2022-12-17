class Coach {
  #notGoodFood;

  setNotGoodFood(notGoodFood) {
    this.#notGoodFood = notGoodFood;
  }

  getNotGoodFood() {
    return this.#notGoodFood;
  }
}

module.exports = Coach;
