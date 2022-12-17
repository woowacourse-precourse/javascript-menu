const { Random } = require("@woowacourse/mission-utils");

const RandomNumberGenerator = {
  generate(start, end) {
    return Random.pickNumberInRange(start, end);
  },
};

module.exports = RandomNumberGenerator;
