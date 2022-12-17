const MENU_MAP = require('../constants');
const { Random } = require('@woowacourse/mission-utils');

class Menu {
  #categoris;
  #hates;
  #foods;

  constructor(categoris, hates) {
    this.#categoris = categoris;
    this.#hates = hates;
    this.#foods = [];
  }

  choiceFood() {
    while (this.#foods.length < 5) {
      const categori = this.#categoris[this.#foods.length];
      const menu = MENU_MAP[categori];
      const menuNumbers = new Array(menu.length).fill().map((value, index) => index);
      const food = menu[Random.shuffle(menuNumbers)[0]];
      if (this.#foods.includes(food) || this.#hates.includes(food)) continue;
      this.#foods.push(food);
    }

    return this.#foods;
  }
}

module.exports = Menu;
