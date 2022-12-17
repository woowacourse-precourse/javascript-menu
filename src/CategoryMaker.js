const RandomNumberMaker = require('./RandomNumberMaker');
const {
  CATEGORY_LENGTH,
  MAX_LENGTH_OF_DUPLICATED_CATEGORY,
} = require('./utils/constants');

const CategoryMaker = {
  makeCategory() {
    let categories = [];
    while (categories.length !== CATEGORY_LENGTH) {
      const NUMBER = RandomNumberMaker.generate();

      let array = categories.filter((category) => category === NUMBER);
      if (array.length === MAX_LENGTH_OF_DUPLICATED_CATEGORY) continue;
      categories.push(NUMBER);
    }

    return categories;
  },
};

module.exports = CategoryMaker;
