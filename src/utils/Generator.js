const { Random } = require('@woowacourse/mission-utils');
const Generator = {
  generateRandomNumberBetween1And5() {
    return Random.pickNumberInRange(1, 5);
  },

  generateNewRecommendedFood() {},
};

module.exports = Generator;
