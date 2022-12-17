const { Random } = require('@woowacourse/mission-utils');
const SAMPLE = require('../constant/Menu');

class MenuPicker {
  #category;
  constructor() {
    this.#category = [];
  }

  weekPick() {
    while (this.#category.length < 5) {
      this.addCategory();
      this.checkRepeated();
    }
    return this.#category;
  }

  checkRepeated() {
    const sumMenu = this.#category.reduce((categorySum, today) => {
      categorySum[today] = (categorySum[today] || 0) + 1;
      return categorySum;
    }, {});
    const countMenu = Object.values(sumMenu);
    if (countMenu.filter((count) => count >= 3).length !== 0) {
      this.#category.pop();
      this.addCategory();
    }
    return sumMenu;
  }

  addCategory() {
    this.#category.push(this.pickCategory());
  }

  pickCategory() {
    const foodType = Object.keys(SAMPLE);
    return Random.pickNumberInRange(0, foodType.length - 1);
  }
}

module.exports = MenuPicker;
