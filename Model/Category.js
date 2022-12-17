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

  // 랜덤 넘버 생성
  static generateRandom() {
    return Random.pickNumberInRange(1, 5);
  }

  static hasTwoCategory(number) {
    return this.categories.filter((category) => category === number).length > 1;
  }

  // 카테고리 선택
  static pickCategory() {
    let count = 0;

    while (count < 5) {
      const number = this.generateRandom(); // 1 ~ 5
      const hasTwoCategory = this.hasTwoCategory(number) || 0;

      if (!hasTwoCategory) {
        this.categories.push(number);
        count++;
      }
    }
    // console.log(this.categories);
    // return this.categories;
  }
}
module.exports = Category;

// Category.init();
// Category.pickCategory();
