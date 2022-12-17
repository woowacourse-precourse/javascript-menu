const MissionUtils = require("@woowacourse/mission-utils");
const { RANDOM_RANGE_NUMBER } = require("../Constant");

const RandomNumberGenerator = {

  generate() {
    return MissionUtils.Random.pickNumberInRange(
      RANDOM_RANGE_NUMBER.RANDOM_LOWER_INCLUSIVE,
      RANDOM_RANGE_NUMBER.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = RandomNumberGenerator;
