const { Random } = require('@woowacourse/mission-utils');
const Categories = require('../Model/Categories');
const Menus = require('../Model/Menus');
const Coach = require('../Model/Coach');
const { SERVICE } = require('./constants');

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
    const duplicates = this.#categories.filter((name) => name === category);

    if (duplicates.length === SERVICE.MAX_DUPLICATES) {
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
    const menu = this.getRandomMenu(menus);

    if (coach.hasHateMenu(menu) || coach.hasMenu(menu)) {
      return this.pickMenu(coach, category);
    }

    coach.selectMenu(menu);
  }

  getRandomMenu(menus) {
    const indicies = Array.from(menus, (_, i) => i + 1);
    const menuIndex = Random.shuffle(indicies)[0] - 1;

    return menus[menuIndex];
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
