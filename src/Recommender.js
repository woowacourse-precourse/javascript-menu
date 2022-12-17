const { Random } = require('@woowacourse/mission-utils');

const { MENU_INFO } = require('./constants');
/**
 * 추천 기능(카테고리, 메뉴)을 담당한다.
 */
const Recommender = {
  CATEGORY_INFO: {
    1: '일식',
    2: '한식',
    3: '중식',
    4: '아시안',
    5: '양식',
  },

  /**
   * 추천된 카테고리를 반환하는 메서드
   * @returns {string} 추천된 카테고리
   */
  getRecommendedCategory() {
    return this.CATEGORY_INFO[Random.pickNumberInRange(1, 5)];
  },

  /**
   * 카테고리에 맞게 추천된 메뉴를 반환하는 메서드
   * @param {string} category 카테고리
   * @returns {string} 추천된 메뉴
   */
  getRecommendedMenu(category) {
    const menuList = MENU_INFO[category].split(', ');
    const randomIndex = Random.shuffle(menuList.map((_, i) => i + 1))[0] - 1;

    return menuList[randomIndex];
  },
};

module.exports = Recommender;
