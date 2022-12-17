const { Random } = require('@woowacourse/mission-utils');
const { CATEGORIES } = require('./data/menu');
const Validation = require('./modules/Validation');

const RandomCategoryGenerator = {
  generate() {
    return CATEGORIES[Random.pickNumberInRange(1, 5) - 1];
  },
};
const RandomMenuGenerator = {};

const CategoriesGenerator = () => {
  const categories = [];
  while (categories.length < 5) {
    categories.push(RandomCategoryGenerator.generate());
  }
  if (Validation.validateDuplicateCategory(categories)) {
    return categories;
  } else {
    return CategoriesGenerator();
  }
};

console.log(CategoriesGenerator());

module.exports = { RandomCategoryGenerator, RandomMenuGenerator, CategoriesGenerator };
