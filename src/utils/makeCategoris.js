const { Random } = require('@woowacourse/mission-utils');
const { CATEGORI_MAP } = require('../constants');

const makeCategoris = () => {
  const categoris = [];
  while (categoris.length < 5) {
    const newCategori = CATEGORI_MAP[Random.pickNumberInRange(1, 5)];
    if (categoris.filter((categori) => categori === newCategori).length < 2) {
      categoris.push(newCategori);
    }
  }

  return categoris;
};

module.exports = makeCategoris;
