const { Random } = require('@woowacourse/mission-utils');

const { MENU_INFO } = require('./constants');

const Recommender = {
  CATEGORY_INFO: {
    1: '일식',
    2: '한식',
    3: '중식',
    4: '아시안',
    5: '양식',
  },

  getRecommendedCategory() {
    return this.CATEGORY_INFO[Random.pickNumberInRange(1, 5)];
  },

  getRecommendedMenu(category) {
    const menuList = MENU_INFO[category].split(', ');
    const randomIndex = Random.shuffle(menuList.map((_, i) => i + 1))[0] - 1;

    return menuList[randomIndex];
  },
};

module.exports = Recommender;
