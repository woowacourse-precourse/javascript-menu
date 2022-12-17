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
    this.#coaches.forEach((coach, index) => {
      const category = this.pickCategory(index);
      coach.addCategory(category);
      // const menu = this.pickMenu(category);
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
}

module.exports = MenuService;
