const { CATEGORIES } = require('../constants');

const CategoryMaker = {
  makeCategories(generateRandomNumber) {
    let prev = 0;
    const categories = new Array(5).fill(0).map(() => {
      let number = generateRandomNumber();
      while (prev === number) {
        number = generateRandomNumber();
      }
      return CATEGORIES[number - 1];
    });
    return categories;
  },
};

module.exports = CategoryMaker;
