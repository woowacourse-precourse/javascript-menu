const { Random } = require("@woowacourse/mission-utils");

const GetRandomCategory = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 5,
  get() {
    return Random.pickNumberInRange(
      this.RANDOM_LOWER_INCLUSIVE,
      this.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = GetRandomCategory;
