const { Random } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = {
  MIN: 1,
  MAX: 5,
  generate() {
    return Random.pickNumberInRange(RandomNumberGenerator.MIN, RandomNumberGenerator.MAX);
  },
};

module.exports = RandomNumberGenerator;
