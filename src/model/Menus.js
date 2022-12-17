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

  getCategory(categoryNum) {
    if (categoryNum === 1) return '일식';
    if (categoryNum === 2) return '한식';
    if (categoryNum === 3) return '중식';
    if (categoryNum === 4) return '아시안';
    if (categoryNum === 5) return '양식';
    return null;
  }

  getCategoryNum(category) {
    if (category === '일식') return 1;
    if (category === '한식') return 2;
    if (category === '중식') return 3;
    if (category === '아시안') return 4;
    if (category === '양식') return 5;
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
