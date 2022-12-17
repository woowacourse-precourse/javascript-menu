class Coach {
  #unableEatList;
  #eatenFoods;
  #name;

  constructor(name) {
    this.#name = name;
    this.#unableEatList = [];
    this.#eatenFoods = [];
  }

  setUnableFood(location) {
    this.#unableEatList.push(...location.slice());
    console.log(this.#unableEatList);
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

  getCoachName() {
    const coachName = this.#name + '';
    return coachName;
  }

  suggestMenu() {}
}

module.exports = Coach;
