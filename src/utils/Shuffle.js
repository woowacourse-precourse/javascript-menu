const { Random } = require('@woowacourse/mission-utils');

const Shuffle = {
  getRandomMenu(categoryMenuList) {
    return Shuffle.shuffledMenu(categoryMenuList);
  },

  shuffledMenu(categoryMenuList) {
    const idx = Shuffle.shuffledMenuIdx(categoryMenuList)[0];
    return categoryMenuList[idx];
  },

  shuffledMenuIdx(categoryMenuList) {
    return Random.shuffle(categoryMenuList.map((menu, idx) => idx));
  },
};

module.exports = Shuffle;
