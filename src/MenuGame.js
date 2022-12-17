const MissionUtils = require('@woowacourse/mission-utils');
const { PARAMETERS } = require('./utils/constants');
const Validation = require('./Validation');

class MenuGame {
  constructor() {
    this.coaches = [];
    this.inedibleMenus = {};
    this.categories = [];
    this.menus = {};
  }

  setWeeklyMenu() {
    for (let day = 0; day < PARAMETERS.dayCount; day += 1) {
      this.setDailyMenu();
    }
  }

  setDailyMenu() {
    const CATEGORY = this.setCategory();

    this.coaches.forEach((coach) => {
      this.setMenu(CATEGORY, coach);
    });
  }

  // 각 요일별 메뉴 생성하기
  setCategory() {
    const CATEGORY = PARAMETERS.category[this.getCategory() - 1];
    const DUPLICATES = this.categories.filter((ele) => ele === CATEGORY).length;
    if (DUPLICATES.length === 2) {
      this.setCategory();
    }

    this.categories.push(CATEGORY);
    return CATEGORY;
  }

  getCategory() {
    return MissionUtils.Random.pickNumberInRange(1, 5);
  }

  setMenu(category, coach) {
    if (this.menus[coach] === undefined) {
      this.menus[coach] = [];
    }

    const MENU = this.getMenu(category);

    if (!Validation.checkMenu(MENU, this.menus[coach], this.inedibleMenus[coach])) {
      this.setMenu(category, coach);
    }

    this.menus[coach].push(MENU);
  }

  getMenu(category) {
    const INDICES = [...Array(PARAMETERS.menu[category].length).keys()];
    const MENU_INDEX =  MissionUtils.Random.shuffle(INDICES)[0];
    
    return PARAMETERS.menu[category][MENU_INDEX];
  }
}

module.exports = MenuGame;
