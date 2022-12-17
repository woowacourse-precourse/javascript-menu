const { SAMPLE } = require("./model/repository");

class Coach {
  #name = "";
  #disabledFoods = [];
  #dayFood = []

  constructor(name) {
    if(!(name.length >= 2 && name.length <= 4)){
      throw new Error("[ERROR] 코치의 이름은 최소 2글자, 최대 4글자이다.")
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getDisabledFood() {
    return this.#disabledFoods
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