const { Random } = require("@woowacourse/mission-utils");
const { CATEGORIES, MENUS, MENU_NUMBERS } = require("../constant/Constant");

const Recommand = {
  selectCategory() {
    const category = CATEGORIES[Random.pickNumberInRange(1, 5)];
    return category;
  },

  selectMenu(category) {
    const menuNumber = Random.shuffle(MENU_NUMBERS)[0];
    const menu = MENUS[category][menuNumber - 1];
    return menu;
  },
};

module.exports = Recommand;
