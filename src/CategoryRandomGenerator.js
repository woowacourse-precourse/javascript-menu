const { Random } = require('@woowacourse/mission-utils');

const CategoryRandomGenerator = {
  categoryGenerate(categories) {
    const randomIndex = Random.pickNumberInRange(1, 5);

    return categories[randomIndex - 1];
  },
};

module.exports = CategoryRandomGenerator;
