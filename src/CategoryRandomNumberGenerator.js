const { Random } = require("@woowacourse/mission-utils");

const CategoryRandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 5,
  generate() {
    return Random.pickNumberInRange(
      CategoryRamdomNumberGenrator.RANDOM_LOWER_INCLUSIVE,
      CategoryRamdomNumberGenrator.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = CategoryRamdomNumberGenrator;
