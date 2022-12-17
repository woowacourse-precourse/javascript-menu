const MissionUtils = require('@woowacourse/mission-utils');

const RandomShuffler = {
  ARRAY: [0, 1, 2, 3, 4, 5, 6, 7, 8],

  shuffle() {
    let array = MissionUtils.Random.shuffle(RandomShuffler.ARRAY);

    return array[0];
  },
};

module.exports = RandomShuffler;
