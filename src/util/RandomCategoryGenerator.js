const MissionUtils = require("@woowacourse/mission-utils");

const categorys = ["일식", "한식", "중식", "아시안", "양식"];
const CATEGORY_LENGTH = 5;
const MAX_NUMBER_DUPLICATE_CATEGORY = 2;

const RandomCategoryGenerator = {
  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 5);
  },

  generateRandomCategorys() {
    const randomCategorys = [];
    while (randomCategorys.length < CATEGORY_LENGTH) {
      const newCategory = categorys[this.generateRandomNumber() - 1];
      if (randomCategorys.filter((category) => category === newCategory).length === MAX_NUMBER_DUPLICATE_CATEGORY)
        continue;
      randomCategorys.push(newCategory);
    }
    return randomCategorys;
  },
};

module.exports = RandomCategoryGenerator;
