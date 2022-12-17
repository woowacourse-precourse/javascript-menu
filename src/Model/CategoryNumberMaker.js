const { Random } = require('@woowacourse/mission-utils');

const CategoryNumberMaker = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 5,

  makeRandomFiveNumbers() {
    const category = [];
    while (category.length < 5) {
      const randomNumber = this.generateRandomNumber();
      const filtered = category.filter((item) => item === randomNumber);
      if (filtered.length > 1) continue;
      category.push(randomNumber);
    }
    return category;
  },

  generateRandomNumber() {
    return Random.pickNumberInRange(CategoryMaker.RANDOM_LOWER_INCLUSIVE, CategoryMaker.RANDOM_UPPER_INCLUSIVE);
  },
};

module.exports = CategoryNumberMaker;
