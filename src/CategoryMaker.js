const { Random } = require('@woowacourse/mission-utils');

const CategoryMaker = {
  createCategory() {
    const categories = [];
    while (categories.length < 5) {
      const category = Random.pickNumberInRange(1, 5);
      const num = categories.filter((el) => el === category).length;
      if (num < 2) categories.push(category);
    }
    return categories;
  },
};

module.exports = CategoryMaker;
