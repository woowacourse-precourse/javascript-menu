const { SAMPLE } = require("./model/repository");

class Coach {
  #name = "";
  #disabledFoods = [];
  #dayCategoty = [];
  #dayFood = []

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setDisabledFood(foods) {
    foods.split(",").map((food) => {
      this.#disabledFoods.push(food);
    })
  }

  getDayFood() {
    return this.#dayFood;
  }
  setDayFood(food) {
    this.#dayFood.push(food)
  }

}

module.exports = Coach;