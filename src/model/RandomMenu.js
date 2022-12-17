const { Random } = require('@woowacourse/mission-utils');

class RandomMenu {
  #category = ['', '일식', '한식', '중식', '아시안', '양식'];

  #categoryCount = new Map();

  #days = [];

  #result = {};

  constructor() {
    this.initCategory();
  }

  setCategoryDays() {
    Array.from({ length: 5 }).forEach((day) => {
      this.setCategory();
    });
    console.log(this.#categoryCount);
    console.log(this.#days);
  }

  setCategory() {
    const category = this.#category[Random.pickNumberInRange(1, 5)];
    const count = this.#categoryCount.get(category);
    console.log(category, count);
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

  setRandomMenu(name) {}
}

module.exports = RandomMenu;
