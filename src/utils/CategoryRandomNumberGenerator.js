const MissionUtils = require('@woowacourse/mission-utils');

const CategoryRandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 5,
  generate() {
    return MissionUtils.Random.pickNumberInRange(
      CategoryRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
      CategoryRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = CategoryRandomNumberGenerator;
