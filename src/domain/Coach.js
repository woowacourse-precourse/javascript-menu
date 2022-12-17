class Coach {
  #unableEatList;
  #eatenFoods;

  constructor() {
    this.#unableEatList = [];
    this.#eatenFoods = [];
  }

  hasUnableToEatList() {
    if (this.#unableEatList.length) return true;
    return false;
  }

  isAlreadyEatenTwice(menu) {
    const food = this.#eatenFoods.slice();
    food = food.filter((value) => value === menu);
    if (food.length > 2) return true;
    return false;
  }

  suggestMenu() {}
}

module.exports = Coach;
