const { CATEGORY } = require('../data/Constants');

class Menus {
  #categoryMap;

  #japaneseFood;

  #koreanFood;

  #chineseFood;

  #asianFood;

  #westernFood;

  constructor(sample) {
    this.insertCategory();
    Object.entries(sample).forEach(([key, value]) => {
      if (key === CATEGORY.JAPANESE) this.#japaneseFood = value.split(', ');
      if (key === CATEGORY.KOREAN) this.#koreanFood = value.split(', ');
      if (key === CATEGORY.CHINESE) this.#chineseFood = value.split(', ');
      if (key === CATEGORY.ASIAN) this.#asianFood = value.split(', ');
      if (key === CATEGORY.WESTERN) this.#westernFood = value.split(', ');
    });
  }

  insertCategory() {
    this.#categoryMap = new Map();
    const categoryArr = [
      CATEGORY.JAPANESE,
      CATEGORY.KOREAN,
      CATEGORY.CHINESE,
      CATEGORY.ASIAN,
      CATEGORY.WESTERN,
    ];
    categoryArr.forEach((category, index) => {
      this.#categoryMap.set(index + 1, category);
    });
  }

  getCategory(categoryNum) {
    return this.#categoryMap.get(categoryNum);
    return null;
  }

  getCategoryNum(category) {
    if (category === CATEGORY.JAPANESE) return 1;
    if (category === CATEGORY.KOREAN) return 2;
    if (category === CATEGORY.CHINESE) return 3;
    if (category === CATEGORY.ASIAN) return 4;
    if (category === CATEGORY.WESTERN) return 5;
    return null;
  }

  getCategoryMenu(categoryNum) {
    if (categoryNum === 1) return this.#japaneseFood;
    if (categoryNum === 2) return this.#koreanFood;
    if (categoryNum === 3) return this.#chineseFood;
    if (categoryNum === 4) return this.#asianFood;
    if (categoryNum === 5) return this.#westernFood;
    return null;
  }
}

module.exports = Menus;
