const { Random } = require('@woowacourse/mission-utils');

const Shuffle = {
  getRandomMenu(categoryMenus) {
    return Shuffle.shuffledMenu(categoryMenus);
  },

  shuffledMenu(categoryMenus) {
    const firstIdx = Shuffle.shuffledMenuIndex(categoryMenus)[0];
    return categoryMenus[firstIdx];
  },

  shuffledMenuIndex(categoryMenus) {
    return Random.shuffle(categoryMenus.map((_, idx) => idx));
  },
};

module.exports = Shuffle;
