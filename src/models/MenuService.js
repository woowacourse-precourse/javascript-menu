const Coach = require('./Coach');
const { CATEGORY, MENUS } = require('../utils/constants');
const { Random } = require('@woowacourse/mission-utils');
const { validateCoachNames } = require('../utils/InputValidator');

class MenuService {
  #coaches = [];

  constructor(coachNames) {
    coachNames.forEach((name) => {
      this.#coaches.push(new Coach(name));
    });
  }

  tossHateFoods(index, foods) {
    if (foods[0] !== '') this.#coaches[index].setHateFoods(foods);
  }

  recommend() {
    const DAY = { min: 0, max: 4 }; //월~금
    for (let day = DAY.min; day <= DAY.max; day++) {
      this.recommendDay();
    }
  }

  recommendDay() {
    this.#coaches.forEach((coach, index) => {
      const category = this.pickCategory(index);
      coach.addCategory(category);
      let menu = this.pickMenu(category);
      while (!coach.isValidMenu(menu)) {
        menu = this.pickMenu(category);
      }
      coach.addMenu(menu);
    });
  }

  pickCategory(index) {
    let category = CATEGORY[Random.pickNumberInRange(CATEGORY.min, CATEGORY.max)];
    while (!this.#coaches[index].isValidCategory(category)) {
      category = CATEGORY[Random.pickNumberInRange(CATEGORY.min, CATEGORY.max)];
    }
    return category;
  }

  pickMenu(category) {
    const menus = MENUS[category];
    const menusIndex = Array.from({ length: menus.length }, (v, i) => i);
    const menu = menus[Random.shuffle(menusIndex)[0]];
    return menu;
  }

  getCoaches() {
    return Object.freeze(this.#coaches);
  }
}

module.exports = MenuService;
