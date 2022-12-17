const { Random } = require('@woowacourse/mission-utils');

class Category {
  static categories;

  static init() {
    this.categories = [];
  }

  static generate() {
    this.init();
    this.pickCategory();
  }

  static getCategory() {
    return this.categories;
  }

  static generateRandom() {
    return Random.pickNumberInRange(1, 5);
  }

  static hasTwoCategory(number) {
    return this.categories.filter((category) => category === number).length > 1;
  }

  static pickCategory() {
    let pickCount = 0;

    while (pickCount < 5) {
      const number = this.generateRandom(); // 1 ~ 5
      const hasTwoCategory = this.hasTwoCategory(number) || 0;

      if (!hasTwoCategory) {
        this.categories.push(number);
        pickCount += 1;
      }
    }
  }

  static getCategoryName(categoryIndex) {
    if (categoryIndex === 1) {
      return '일식';
    }
    if (categoryIndex === 2) {
      return '한식';
    }
    if (categoryIndex === 3) {
      return '중식';
    }
    return categoryIndex === 4 ? '아시안' : '양식';
  }

  static toString() {
    const names = this.categories.map(this.getCategoryName);
    return names.join(' | ');
  }
}
module.exports = Category;
