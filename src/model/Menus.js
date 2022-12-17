const { Random } = require('@woowacourse/mission-utils');

class Menus {
  #japaneseFood;

  #koreanFood;

  #chineseFood;

  #asianFood;

  #westernFood;

  constructor(sample) {
    Object.entries(sample).forEach(([key, value]) => {
      if (key === '일식') this.#japaneseFood = value.split(', ');
      if (key === '한식') this.#koreanFood = value.split(', ');
      if (key === '중식') this.#chineseFood = value.split(', ');
      if (key === '아시안') this.#asianFood = value.split(', ');
      if (key === '양식') this.#westernFood = value.split(', ');
    });
  }

  getCategory(number) {
    if (number === 1) return this.#japaneseFood;
    if (number === 2) return this.#koreanFood;
    if (number === 3) return this.#chineseFood;
    if (number === 4) return this.#asianFood;
    if (number === 5) return this.#westernFood;
    return null;
  }

  static recommend(menus) {
    return Random.shuffle(menus)[0];
  }
}

module.exports = Menus;
