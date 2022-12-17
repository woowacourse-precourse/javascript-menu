const Coach = require('./Coach');

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
}

module.exports = MenuService;
