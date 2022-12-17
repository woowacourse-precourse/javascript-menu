class Coach {
  #name;
  #pickyFoods;
  #menus = [];

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setPickyFoods(foods) {
    this.#pickyFoods = foods;
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

  addFoodtoMenu(food) {
    this.#menus.push(food);
  }
}

module.exports = Coach;
