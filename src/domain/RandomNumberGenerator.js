const { Random } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = Object.freeze({
  CATEGORY_MIN: 1,
  CATEGORY_MAX: 5,

  generate() {
    return Random.pickNumberInRange(this.CATEGORY_MIN, this.CATEGORY_MAX);
  },
});

module.exports = RandomNumberGenerator;
