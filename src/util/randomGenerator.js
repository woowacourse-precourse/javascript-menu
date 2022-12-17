const { NUMBER } = require('./constants/number');
const { Random } = require('@woowacourse/mission-utils');

const randomGenerator = {
  generateRandomCategoryNumber() {
    return Random.pickNumberInRange(
      NUMBER.minRandomCategory,
      NUMBER.maxRandomCategory
    );
  },

  generateRandomMenuNumber() {
    return Random.pickNumberInRange(NUMBER.minRandomMenu, NUMBER.maxRandomMenu);
  },
};

module.exports = randomGenerator;
