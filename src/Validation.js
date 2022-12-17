const Validation = {
  checkCategory(categories, selectedCategory) {
    const DUPLICATES = categories.filter((ele) => ele === selectedCategory);

    if (DUPLICATES.length === 2) {
      return false;
    }

    return true;
  },

  checkMenu(menu, currentMenus, inedbileMenus) {
    if (currentMenus.includes(menu) || inedbileMenus.includes(menu)) {
      return false;
    }

    return true;
  },
};

module.exports = Validation;
