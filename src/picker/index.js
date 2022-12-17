const { Random } = require("@woowacourse/mission-utils");
const { MENU } = require("../constants/index");

const categories = [null, ...Object.keys(MENU)];

const Picker = {
  getCategory() {
    return categories[Random.pickNumberInRange(1, 5)];
  },

  getMenu(category) {
    const menus = MENU[category].split(", ");

    return menus[Random.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8])[0]];
  },
};

module.exports = Picker;
