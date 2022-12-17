const { Random } = require('@woowacourse/mission-utils');

const Shuffle = {
  getRandomMenu(categoryMenuList) {
    return Shuffle.shuffledMenu(categoryMenuList);
  },

  shuffledMenu(categoryMenuList) {
    let idx = Shuffle.shuffledMenuIdx(categoryMenuList)[0];
    return categoryMenuList[idx - 1];
  },

  shuffledMenuIdx(categoryMenuList) {
    const categoryMenusNumberList = categoryMenuList.map((_, idx) => idx + 1);
    return Random.shuffle(categoryMenusNumberList);
  },
};

module.exports = Shuffle;
