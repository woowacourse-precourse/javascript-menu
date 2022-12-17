const { Random } = require("@woowacourse/mission-utils");
const { MENU } = require("../constants/index");

const categories = Object.keys(MENU);

const Picker = {
  getCategory() {
    return categories[Random.pickNumberInRange(1, 5)];
  },

  getMenu() {
    return;
  },
};

module.exports = Picker;
