const { Randoms } = require("@woowacourse/mission-utils");
const CATEGORY = require("./data");

const RandomMachine = {
  CATEGORY_START_NUMBER: 1,
  CATEGORY_END_NUMBER: 5,

  getMenu() {
    const number = Randoms.pickNumberInRage(
      RandomMachine.CATEGORY_START_NUMBER,
      RandomMachine.CATEGORY_END_NUMBER
    );
    return CATEGORY[number];
  },

  getFood(menu) {
    return Randoms.shuffle(menu)[0];
  },
};

module.exports = RandomMachine;
