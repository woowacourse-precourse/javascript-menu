const { Random } = require('@woowacourse/mission-utils');

const randomCount = (result, number) => {
  return result.filter((value) => value === number).length;
};

const makeRandomMenuForNum = () => {
  const result = [];

  while (result.length < 5) {
    const randomMenu = Random.pickNumberInRange(1, 5);
    if (randomCount(result, randomMenu) <= 2) {
      result.push(randomMenu);
    }
  }

  return result;
};

const makeRandomCategory = () => {
  const result = makeRandomMenuForNum();
  return result.map((value) => {
    if (value === 1) return '일식';
    if (value === 2) return '한식';
    if (value === 3) return '중식';
    if (value === 4) return '아시안';
    if (value === 5) return '양식';
    return null;
  });
};

module.exports = {
  makeRandomCategory,
};
