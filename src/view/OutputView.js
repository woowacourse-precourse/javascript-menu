const { print } = require('../utils/utils');
const { SHOW_CATEGORY, SHOW_MENUS } = require('../utils/constants');
const Recommendor = require('../model/recommendor');

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

  printMenus(recommendor) {
    const COATCHES = recommendor.getCoaches();
    recommendor.getRecommendedMenus().forEach((menus, index) => {
      print(SHOW_MENUS(COATCHES[index], menus));
    });
  },
};

module.exports = OutputView;
