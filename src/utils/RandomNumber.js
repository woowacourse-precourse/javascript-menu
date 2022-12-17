const { Random } = require("@woowacourse/mission-utils");

const RandomNumberGenerator = {
  generate(start, end) {
    return Random.pickNumberInRange(start, end);
  },

  shuffle(array) {
    return Random.shuffle(array);
  },
};

module.exports = RandomNumberGenerator;
