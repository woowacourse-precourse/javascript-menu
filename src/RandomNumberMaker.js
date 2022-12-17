const MissionUtils = require('@woowacourse/mission-utils');

const RandomNumberMaker = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 5,
  generate() {
    return MissionUtils.Random.pickNumberInRange(
      RandomNumberMaker.RANDOM_LOWER_INCLUSIVE,
      RandomNumberMaker.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = RandomNumberMaker;
