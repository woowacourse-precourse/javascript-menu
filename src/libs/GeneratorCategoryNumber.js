const { Random } = require('@woowacourse/mission-utils');

const GeneratorCategoryNumber = {
  generator() {
    return Random.pickNumberInRange(1, 5);
  },
};

module.exports = GeneratorCategoryNumber;
