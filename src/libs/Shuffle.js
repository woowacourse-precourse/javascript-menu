const { Random } = require('@woowacourse/mission-utils');

const Shuffle = {
  getRandomMenu(categoryMenus) {
    return Shuffle.shuffledMenu(categoryMenus);
  },

  shuffledMenu(categoryMenus) {
    firstIdx = Shuffle.shuffledMenuIndex(categoryMenus)[0];
    return categoryMenus[firstIdx - 1];
  },

  shuffledMenuIndex(categoryMenus) {
    return Random.shuffle(categoryMenus.map((_, idx) => idx + 1));
  },
};

module.exports = Shuffle;
