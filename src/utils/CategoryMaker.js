const MissionUtils = require("@woowacourse/mission-utils");

const CategoryMaker = {
  makeCategory: () => {
    const categories = [];
    while (categories.length < 5) {
      const randomCategory = MissionUtils.Random.pickNumberInRange(1, 5);
      const isIncluded = categories.includes(randomCategory);
      const isDuplicatedCategory =
        categories.filter((x) => x === randomCategory).length === 2;
      if (isIncluded && isDuplicatedCategory) continue;
      categories.push(randomCategory);
    }
    return categories;
  },
};
module.exports = CategoryMaker;
