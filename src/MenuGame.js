const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const { PARAMETERS, SAMPLE } = require('./utils/constants');
const Validation = require('./Validation');

class MenuGame {
  constructor() {
    this.coaches = [];
    this.inedibleMenus = {};
    this.categories = [];
    this.menus = {};
  }

  setCoachesMenu() {
    // first set weekly category 
    for (let day = 0; day < PARAMETERS.dayCount; day += 1) {
      this.setCategory();
    }

    // forEachCoaches set weekly menus
    this.coaches.forEach((coach) => {
      this.setWeeklyMenu(coach);
    });

    OutputView.printResult(this.categories, this.coaches, this.menus);
  }

  setCategory() {
    const CATEGORY = PARAMETERS.category[this.getCategory() - 1];
    const DUPLICATES = this.categories.filter((ele) => ele === CATEGORY).length;
    if (DUPLICATES.length === 2) {
      this.setCategory();
    }

    this.categories.push(CATEGORY);
  }

  getCategory() {
    return MissionUtils.Random.pickNumberInRange(1, 5);
  }

  setWeeklyMenu(coach) {
    for (let day = 0; day < PARAMETERS.dayCount; day += 1) {
      this.setMenu(this.categories[day], coach); 
    }
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
    const MENU_INDEX = MissionUtils.Random.shuffle(PARAMETERS.menu[category])[0];
    return PARAMETERS.menu[category][MENU_INDEX - 1];
  }
}

module.exports = MenuGame;
