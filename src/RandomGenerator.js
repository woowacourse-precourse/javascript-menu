const { Random } = require('@woowacourse/mission-utils');
const { CATEGORIES, SAMPLE } = require('./data/menu');
const Validation = require('./modules/Validation');

const RandomCategoryGenerator = {
  generate() {
    return CATEGORIES[Random.pickNumberInRange(1, 5) - 1];
  },
};
const RandomMenuGenerator = (category) => {
  const menus = SAMPLE[category].split(',');
  const idxOfMenus = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const idxofRandomMenu = Random.shuffle(idxOfMenus)[0];
  const menu = menus[idxofRandomMenu];
  return menu;
};

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

module.exports = { RandomCategoryGenerator, RandomMenuGenerator, CategoriesGenerator };
