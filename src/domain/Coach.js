const getSuggestMenu = require('../utils/getSuggestMenu');
const verify = require('../utils/verify');

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

  suggestMenu(category) {
    const addCheck = this.#eatenFoods.length;
    while (addCheck === this.#eatenFoods.length) {
      const menu = getSuggestMenu(category);
      if (this.#unableEatList.includes(menu)) continue;
      if (verify.eatenTwice(this.#eatenFoods, menu)) continue;
      this.#eatenFoods.push(menu);
      console.log(menu);
    }
  }
}

module.exports = Coach;
