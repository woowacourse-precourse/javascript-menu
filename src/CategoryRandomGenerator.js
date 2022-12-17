const { Randoms } = require("@woowacourse/mission-utils");
const CATEGORY = require("./data");

const CategoryRandomGenerator = {
  START_NUMBER: 1,
  END_NUMBER: 5,

  getCategoryMenu() {
    const number = Randoms.pickNumberInRage(
      CategoryRandomGenerator.START_NUMBER,
      CategoryRandomGenerator.END_NUMBER
    );
    return CATEGORY[number];
  },
};

module.exports = CategoryRandomGenerator;
