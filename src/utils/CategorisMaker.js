const { Random } = require('@woowacourse/mission-utils');

const CategorisMaker = {
  CATEGORI_MAP: { 1: '일식', 2: '한식', 3: '중식', 4: '아시안', 5: '양식' },

  make() {
    const categoris = [];
    while (categoris.length < 5) {
      const newCategori = CategorisMaker.CATEGORI_MAP[Random.pickNumberInRange(1, 5)];
      if (categoris.filter((categori) => categori === newCategori).length < 2) {
        categoris.push(newCategori);
      }
    }

    return categoris;
  },
};

module.exports = CategorisMaker;
