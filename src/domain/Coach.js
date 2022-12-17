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

  suggestMenu(category, verify, suggestFunc) {
    const addCheck = this.#eatenFoods.length;
    while (addCheck === this.#eatenFoods.length) {
      let menu = suggestFunc(category);
      if (verify(this.#eatenFoods, menu)) continue;
      if (this.#unableEatList.includes(menu)) menu = '';
      this.#eatenFoods.push(menu);
    }
  }

  getResultData() {
    return `${this.#name} | ${this.#eatenFoods.join(' | ')}`;
  }
}

module.exports = Coach;
