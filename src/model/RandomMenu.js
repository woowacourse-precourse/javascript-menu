const { Random } = require('@woowacourse/mission-utils');
const { MENU_CATEGORY, MENU_NAME } = require('../Constant');
const SplitAndTrim = require('../utils/SplitAndTrim');

class RandomMenu {
  #category = [
    '',
    MENU_CATEGORY.japen,
    MENU_CATEGORY.korean,
    MENU_CATEGORY.china,
    MENU_CATEGORY.asian,
    MENU_CATEGORY.western,
  ];

  #menus = [
    [],
    SplitAndTrim(MENU_NAME.japen),
    SplitAndTrim(MENU_NAME.korean),
    SplitAndTrim(MENU_NAME.china),
    SplitAndTrim(MENU_NAME.asian),
    SplitAndTrim(MENU_NAME.western),
  ];

  #categoryCount = new Map();

  #days = [];

  #result = {};

  constructor() {
    this.initCategory();
  }

  setCategoryDays() {
    Array.from({ length: 5 }).forEach(() => {
      this.setCategory();
    });
  }

  setCategory() {
    const category = this.#category[Random.pickNumberInRange(1, 5)];
    const count = this.#categoryCount.get(category);
    if (count < 2) {
      this.#categoryCount.set(category, count + 1);
      this.#days.push(category);
      return;
    }
    this.setCategory();
  }

  initCategory() {
    Array.from({ length: 5 }).forEach((__, idx) => {
      this.#categoryCount.set(this.#category[idx + 1], 0);
    });
  }

  initResult(coaches) {
    coaches.forEach((name) => {
      this.#result[name] = [];
    });
  }

  setResult(result) {
    const coaches = Object.keys(result);
    const hateMenus = Object.values(result);
    this.initResult(coaches);
    coaches.forEach((name, index) =>
      this.setCoachMenus(name, hateMenus[index])
    );
  }

  setCoachMenus(name, hateMenus) {
    Array.from({ length: 5 }).forEach((__, index) => {
      this.setCoachRandomMenu(name, index, hateMenus);
    });
  }

  setCoachRandomMenu(name, index, hateMenus) {
    const menu = this.setRandomMenu(this.#days[index]);
    if (hateMenus.includes(menu) || this.#result[name].includes(menu)) {
      this.setCoachRandomMenu(name, index, hateMenus);
      return;
    }

    this.#result[name].push(menu);
  }

  setRandomMenu(category) {
    const categoryIndex = this.#category.findIndex(
      (element) => element === category
    );
    const randomNumber = RandomMenu.createRandomNumber(
      this.#menus[categoryIndex]
    );
    const menuIndex = randomNumber === 0 ? 0 : randomNumber - 1;
    return this.#menus[categoryIndex][menuIndex];
  }

  getResults() {
    return { days: this.#days, result: this.#result };
  }

  static createRandomNumber(category) {
    return Random.shuffle(
      Array.from({ length: category.length }, (__, idx) => idx)
    )[0];
  }
}

module.exports = RandomMenu;
