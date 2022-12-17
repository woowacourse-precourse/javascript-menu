const Coach = require('./Coach');
const { CATEGORY } = require('../utils/constants');
const { Random } = require('@woowacourse/mission-utils');

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

  pickCategory() {
    const category = CATEGORY[Random.pickNumberInRange(CATEGORY.min, CATEGORY.max)];
  }
}

module.exports = MenuService;
