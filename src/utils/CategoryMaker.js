const { CATEGORIES } = require('../constants');

const CategoryMaker = {
  initCount: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },

  makeCategories(generateRandomNumber) {
    const categories = new Array(5).fill(0).map(() => {
      let number = generateRandomNumber();
      while (CategoryMaker.initCount[number] >= 2) {
        number = generateRandomNumber();
      }
      CategoryMaker.initCount[number] += 1;
      return CATEGORIES[number - 1];
    });
    return categories;
  },
};

module.exports = CategoryMaker;
