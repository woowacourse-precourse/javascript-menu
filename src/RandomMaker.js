const { Random } = require('@woowacourse/mission-utils');

const RandomMaker = {
  category() {
    return Random.pickNumberInRange(1, 5) - 1;
  },
};

module.exports = RandomMaker;
