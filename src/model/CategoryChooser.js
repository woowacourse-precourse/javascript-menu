const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY } = require('../constant/Constant');

const CategoryChooser = {
  choose() {
    const chooseCount = Array(6).fill(0);
    const chosenCategory = [];

    while (chosenCategory.length < CATEGORY.MAX_LIMIT) {
      const currentCategory = Random.pickNumberInRange(1, 5);
      if (chooseCount[currentCategory] < CATEGORY.DUPLICATE_LIMIT) {
        chosenCategory.push(currentCategory);
        chooseCount[currentCategory] += 1;
      }
    }

    return chosenCategory;
  },
};

module.exports = CategoryChooser;
