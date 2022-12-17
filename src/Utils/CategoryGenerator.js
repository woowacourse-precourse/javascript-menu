const { Random } = require('@woowacourse/mission-utils');

const CategoryGenerator = {
  generate() {
    const category = Random.pickNumberInRange(1, 5);
    return category;
  }
};

module.exports = CategoryGenerator;
