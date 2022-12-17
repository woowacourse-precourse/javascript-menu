const { Random } = require("@woowacourse/mission-utils");
const CATEGORY = require("./data");

const RandomMachine = {
  CATEGORY_START_NUMBER: 1,
  CATEGORY_END_NUMBER: 5,

  getMenu() {
    const category =
      CATEGORY.CATEGORY_MATCH[
        Random.pickNumberInRage(
          RandomMachine.CATEGORY_START_NUMBER,
          RandomMachine.CATEGORY_END_NUMBER
        )
      ];
    return category;
  },

  getFood(menu) {
    return Random.shuffle(menu)[0];
  },
};

module.exports = RandomMachine;
