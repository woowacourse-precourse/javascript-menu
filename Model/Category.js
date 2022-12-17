const SAMPLE = require('../src/App');
const { Random } = require('@woowacourse/mission-utils');

class Category {
  static categories;

  static init() {
    this.categories = [];
  }

  static generate() {
    this.init();
  }

  // 각 코치에게 음식 추천
  static recommend(coachName) {
    this.pickCategory();
  }

  // 랜덤 넘버 생성
  static generateRandom() {
    return Random.pickNumberInRange(1, 5);
  }

  static getCategoryName(number) {
    if (number === 1) {
      return '일식';
    }
    if (number === 2) {
      return '한식';
    }
    if (number === 3) {
      return '중식';
    }
    return number === 4 ? '아시안' : '양식';
  }

  static hasTwoCategory(categoryName) {
    return (
      this.categories.filter((category) => category === categoryName).length > 2
    );
  }

  static pickCategory() {
    let count = 0;

    while (count < 5) {
      const name = this.getCategoryName(this.generateRandom());
      const hasTwoCategory = this.hasTwoCategory(name);

      if (!hasTwoCategory) {
        this.categories.push(name);
        count++;
      }
    }
    console.log(this.categories);
    // return this.categories;
  }
}
module.exports = Category;

// Category.init();
// Category.pickCategory();
