const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY } = require('../constants/Constant');

const CategoryRandomGenerator = Object.freeze({
  generate() {
    const categoryCode = Random.pickNumberInRange(1, 5);
    return CATEGORY[categoryCode];
  },
});

module.exports = CategoryRandomGenerator;
