const MENU_MAP = require('../constants');
const { Random } = require('@woowacourse/mission-utils');

class Menu {
  #hates;
  #foods;

  constructor(hates) {
    this.#hates = hates;
    this.#foods = [];
  }

  choiceFood(categoris) {
    while (this.#foods.length < 5) {
      const categori = categoris[this.#foods.length];
      const menu = MENU_MAP[categori];
      const menuNumbers = menu.map((value, index) => index + 1);
      const food = menu[Random.shuffle(menuNumbers)[0] - 1];
      if (this.#foods.includes(food) || this.#hates.includes(food)) continue;
      this.#foods.push(food);
    }

    return this.#foods;
  }
}

module.exports = Menu;
