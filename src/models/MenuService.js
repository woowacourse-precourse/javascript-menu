const Coach = require('./Coach');
const { CATEGORY } = require('../utils/constants');
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
      coach.addCategory(this.pickCategory(index));
    });
  }

  pickCategory(index) {
    let category = CATEGORY[Random.pickNumberInRange(CATEGORY.min, CATEGORY.max)];
    while (!this.#coaches[index].isValidCategory(category)) {
      category = CATEGORY[Random.pickNumberInRange(CATEGORY.min, CATEGORY.max)];
    }
    return category;
  }
}

module.exports = MenuService;
