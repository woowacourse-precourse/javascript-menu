const { Random } = require("@woowacourse/mission-utils");

const ShuffleMenu = {
  get(menus) {
    return Random.shuffle(menus);
  },
};

module.exports = ShuffleMenu;
