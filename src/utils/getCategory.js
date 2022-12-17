const { Random } = require('@woowacourse/mission-utils');

const getCategory = (verifyData) => {
  const result = [];
  while (result.length < 5) {
    const input = Random.pickNumberInRange(1, 5);
    if (!verifyData(input - 1, result)) result.push(input - 1);
  }
  return result;
};

module.exports = getCategory;
