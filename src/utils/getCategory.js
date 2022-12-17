const { Random } = require('@woowacourse/mission-utils');

const getCategory = (verifyData) => {
  const result = [];
  while (result.length < 5) {
    const input = Random.pickNumberInRange(0, 4);
    if (!verifyData(input, result)) result.push(input);
  }
  return result;
};

module.exports = getCategory;
