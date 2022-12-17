const { Random } = require("@woowacourse/mission-utils");
const { CATEGORY, CATEGORY_MATCH } = require("./data");

const RandomMachine = {
  CATEGORY_START_NUMBER: 1,
  CATEGORY_END_NUMBER: 5,

  getMenu() {
    const category =
      CATEGORY_MATCH[
        Random.pickNumberInRange(
          RandomMachine.CATEGORY_START_NUMBER,
          RandomMachine.CATEGORY_END_NUMBER
        )
      ];
    return category;
  },

  getFood(category) {
    const menus = CATEGORY[category];
    const length = menus.length;
    const tempArr = [...Array(length)].map((_, i) => i);
    const random = Random.shuffle(tempArr)[0];
    return menus[random];
  },
};

module.exports = RandomMachine;
