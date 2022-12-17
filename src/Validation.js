const Validation = {
  checkMenu(menu, currentMenus, inedbileMenus) {
    if (currentMenus.includes(menu) || inedbileMenus.includes(menu)) {
      return false;
    }

    return true;
  },
};

module.exports = Validation;
