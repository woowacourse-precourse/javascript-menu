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

    console.log(this.#disabledFoods)
  }

}

module.exports = Coach;