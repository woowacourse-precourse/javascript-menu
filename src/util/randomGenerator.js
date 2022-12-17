const { NUMBER } = require('./constants/number');
const { Random } = require('@woowacourse/mission-utils');

const randomGenerator = {
  generateRandomCategoryNumber() {
    return Random.pickNumberInRange(
      NUMBER.minRandomCategory,
      NUMBER.maxRandomCategory
    );
  },

  ShuffleMenu(menu) {
    const indexArray = menu.map((item) => menu.indexOf(item));
    const shuffledIndex = Random.shuffle(indexArray);
    const shuffledMenu = shuffledIndex.map((idx) => menu[idx]);
    return shuffledMenu;
  },
};

module.exports = randomGenerator;
