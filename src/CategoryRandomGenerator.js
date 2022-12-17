const { Random } = require('@woowacourse/mission-utils');

const CategoryRandomGenerator = {
  RANDOM_LOWER_INCLUSIVE: 0,
  RANDOM_UPPER_INCLUSIVE: 4,

  generate(categories) {
    const randomIndex = Random.pickNumberInRange(
      CategoryRandomGenerator.RANDOM_LOWER_INCLUSIVE,
      CategoryRandomGenerator.RANDOM_UPPER_INCLUSIVE
    );

    return categories[randomIndex];
  },
};

module.exports = CategoryRandomGenerator;
