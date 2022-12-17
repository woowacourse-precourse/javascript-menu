const { print } = require('../utils/utils');
const { SHOW_CATEGORY } = require('../utils/constants');

const OutputView = {
  printMessage(message) {
    print(message);
  },

  printCategory(recommendor) {
    let categories = recommendor.getCategories();
    let categoryNames = [];

    categories.forEach((category) => {
      if (category === 1) return categoryNames.push('일식');
      if (category === 2) return categoryNames.push('한식');
      if (category === 3) return categoryNames.push('중식');
      if (category === 4) return categoryNames.push('아시안');
      return categoryNames.push('양식');
    });

    print(SHOW_CATEGORY(categoryNames));
  },
};

module.exports = OutputView;
