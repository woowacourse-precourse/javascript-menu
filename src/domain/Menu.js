const { Random } = require('@woowacourse/mission-utils');

const isDuplicatedThird = (categories, _category) => categories.filter((category) => category === _category).length >= 2;

class Menu {
  #foodList;
  #categories = [];

  constructor(foodList) {
    this.#foodList = foodList;
  }

  #getCategory(number) {
    return Object.keys(this.#foodList)[number - 1];
  }

  #setCategories() {
    while (this.#categories.length < 5) {
      let category = this.#getCategory(Random.pickNumberInRange(1, 5));
      while (isDuplicatedThird(this.#categories, category)) {
        category = this.#getCategory(Random.pickNumberInRange(1, 5));
      }
      this.#categories.push(category);
    }
  }

  #getMenus(category) {
    return this.#foodList[category].split(',').map((food) => food.trim());
  }

  #recommendMenu(category) {
    const indexes = [];
    for (let i = 1; i < this.#getMenus(category).length; i += 1) {
      indexes.push(i);
    }
    return this.#getMenus(category)[Random.shuffle(indexes)[0] - 1];
  }

  // { '포비': [ '우동', '스시' ], '제임스': [ '초코', '가츠동' ] }
  // eslint-disable-next-line max-lines-per-function
  recommendMenus(unlikeMenus) {
    this.#setCategories();
    const menus = []; // 월 화 수 목 금
    this.#categories.forEach((category) => {
      let menu = this.#recommendMenu(category);
      while (unlikeMenus.includes(menu) || menus.includes(menu)) {
        menu = this.#recommendMenu(category);
      }
      menus.push(menu);
    });
    return menus;
  }

  getCategories() {
    return this.#categories;
  }
}

module.exports = Menu;
