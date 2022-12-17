const { RESULT } = require("./Constant");

class Coach {
  #name;
  #pickyFoods;
  #menus = [];
  #number;

  constructor(name, number) {
    this.#name = name;
    this.#number = number;
  }

  getName() {
    return this.#name;
  }

  getNumber() {
    return this.#number;
  }

  setPickyFoods(pickyFoods) {
    this.#pickyFoods = pickyFoods;
  }

  compareCategory(categoryOfToday) {
    const sameCategory = this.#menus.filter(
      ([category, _]) => category === categoryOfToday
    ).length;

    if (sameCategory >= 2) {
      return false;
    }

    return true;
  }

  compareFood(foodOfToday) {
    if (this.#menus.includes(foodOfToday)) {
      return false;
    }

    if (this.#pickyFoods.includes(foodOfToday)) {
      return false;
    }

    return true;
  }

  addFoodtoMenu(category, food) {
    this.#menus.push([category, food]);
  }

  getMenuLength() {
    return this.#menus.length;
  }

  getResult() {
    const foods = this.#menus.map(([_, food]) => food);
    return `[ ${this.name} | ${foods.join(RESULT.divider)} ]`;
  }
}

module.exports = Coach;
