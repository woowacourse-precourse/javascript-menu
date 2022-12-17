const { MenuConfig } = require('./Config');
const Recommend = require('./Recommend');

const Category = {
  randomCategory(length) {
    const duplicateCount = new Array(MenuConfig.CATEGORIES + 1).fill(0);
    const selected = [];
    while (selected.length < length) {
      const category = Recommend.randomCategory();
      if (duplicateCount[MenuConfig[category]] < MenuConfig.DUPLICATE_CATECORY_LIMIT) {
        duplicateCount[MenuConfig[category]] += 1;
        selected.push(category);
      }
    }
    return selected;
  },
};

module.exports = Category;
