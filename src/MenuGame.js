const MissionUtils = require('@woowacourse/mission-utils');
const { PARAMETERS } = require('./utils/constants');

class MenuGame {
  constructor() {
    this.coaches = [];
    this.inedibleMenus = {};
    this.categories = [];
  }

  // 각 요일별 메뉴 생성하기
  setCategory() {
    const CATEGORY = PARAMETERS.category[this.getCategory() - 1];
    const DUPLICATES = this.categories.filter((ele) => ele === CATEGORY).length;
    if (DUPLICATES.length === 2) {
      return this.setCategory();
    }

    this.categories.push(CATEGORY);
  }

  getCategory() {
    return MissionUtils.Random.pickNumberInRange(1, 5);
  }
}

module.exports = MenuGame;
