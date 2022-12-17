const MissionUtils = require("@woowacourse/mission-utils");

const CategoryMaker = {
  makeCategory: (categories) => {
    while (1) {
      const randomCategory = MissionUtils.Random.pickNumberInRange(1, 5);
      const isIncluded = categories.includes(randomCategory);
      const isDuplicatedCategory =
        categories.filter((x) => x === randomCategory).length === 2;
      if (isIncluded && isDuplicatedCategory) continue;
      return [...categories, randomCategory];
    }
  },

  getRandomMenu: (menus) => {
    return MissionUtils.Random.shuffle(menus)[0];
  },
};
module.exports = CategoryMaker;
