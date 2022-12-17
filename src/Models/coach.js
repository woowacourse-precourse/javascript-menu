const Validate = require('../utils/validate');

class Coach {
  #name;

  #recomend;

  #exceptionFoods;

  constructor(name) {
    this.#name = name;
    this.#exceptionFoods = [];
  }

  setExceoptionFoods(answer) {
    answer.split(',').forEach((food) => {
      this.#exceptionFoods.push(food);
    });
  }

  getCoachName() {
    return this.#name;
  }
}

module.exports = Coach;
