const { Random } = require('@woowacourse/mission-utils');

class RandomMenu {
  #category = ['', '일식', '한식', '중식', '아시안', '양식'];

  #daysCategory;

  #result = {};

  setCategory() {
    this.#daysCategory = Array.from({ length: 5 }, () => {
      return this.#category[Random.pickNumberInRange(1, 5)];
    });
    console.log(this.#daysCategory);
  }

  setRandomMenu(name) {}
}

module.exports = RandomMenu;
