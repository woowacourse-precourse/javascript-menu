const { Random } = require('@woowacourse/mission-utils');
const Categories = require('../Model/Categories');
const Menus = require('../Model/Menus');
const Coach = require('../Model/Coach');

class MenuService {
  #days = ['월요일', '화요일', '수요일', '목요일', '금요일'];
  #categories = [];
  #coaches;

  createCoaches(coachNames) {
    this.#coaches = coachNames.map((name) => new Coach(name));
  }

  getCoaches() {
    return this.#coaches;
  }

  pickCategories() {
    const categories = new Categories();

    while (this.#categories.length !== this.#days.length) {
      this.pickCategory(categories);
    }
  }

  pickCategory(categories) {
    const category = categories.get(Random.pickNumberInRange(1, 5));

    if (this.#categories.filter((name) => name === category).length === 2) {
      this.pickCategory(categories);
    } else {
      this.#categories.push(category);
    }
  }

  recommand() {
    this.#coaches.forEach((coach) => {
      this.#categories.forEach((category) => {
        this.pickMenu(coach, category);
      });
    });
  }

  pickMenu(coach, category) {
    const menus = Menus[category];
    const indicies = Array.from(menus, (_, i) => i + 1);
    const menuIndex = Random.shuffle(indicies)[0] - 1;
    const menu = menus[menuIndex];

    if (coach.hasHateFoods(menu) || coach.hasMenu(menu)) {
      return this.pickMenu(coach, category);
    }

    console.log(menus, menuIndex, menu);

    coach.selectMenu(menu);
  }

  getResult() {
    return {
      days: this.#days,
      categories: this.#categories,
      coaches: this.#coaches,
    };
  }
}

module.exports = MenuService;
