const { Random } = require("@woowacourse/mission-utils");
const { CATEGORIES, MENUS } = require("../constant/Constant");

const menuNumbers = Array.from({ length: 9 }, (_, idx) => idx + 1);

const Recommand = {
  selectCategory() {
    const category = CATEGORIES[Random.pickNumberInRange(1, 5)];
    return category;
  },

  selectMenu(category) {
    const menuNumber = Random.shuffle(menuNumbers)[0];
    const menu = MENUS[category][menuNumber - 1];
    return menu;
  },
};

module.exports = Recommand;
