const { AllCategory, AllMenu } = require("../static/Static");

const SearchMenu = {
  getIsMenuExist(menu) {
    let isMenuExist = false;

    if (menu === "") isMenuExist = true;

    for (let i = 0; i < AllCategory.length; i++) {
      if (AllMenu[AllCategory[i]].includes(menu)) {
        isMenuExist = true;
        break;
      }
    }

    return isMenuExist;
  },
};

module.exports = SearchMenu;
