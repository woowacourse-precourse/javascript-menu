const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const { PARAMETERS } = require('./utils/constants');
const Validation = require('./Validation');

class MenuGame {
  constructor() {
    this.inedibleMenus = {};
    this.menus = {};
    this.coaches = [];
    this.categories = [];
  }

  setCoachesMenu() {
    for (let day = 0; day < PARAMETERS.dayCount; day += 1) {
      this.setCategory();
    }

    this.coaches.forEach((coach) => {
      this.setWeeklyMenu(coach);
    });

    OutputView.printResult(this.categories, this.coaches, this.menus);
  }

  setCategory() {
    const CATEGORY = PARAMETERS.category[this.getCategory() - 1];

    if (!Validation.checkCategory(this.categories, CATEGORY)) {
      this.setCategory();
    }

    this.categories.push(CATEGORY);
  }

  getCategory() {
    const [MIN_INDEX, MAX_INDEX] = PARAMETERS.categoryRange;

    return MissionUtils.Random.pickNumberInRange(MIN_INDEX, MAX_INDEX);
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
    const MENU_INDEX = MissionUtils.Random.shuffle(PARAMETERS.menuIndex)[0];
    return PARAMETERS.menu[category][MENU_INDEX - 1];
  }
}

module.exports = MenuGame;
