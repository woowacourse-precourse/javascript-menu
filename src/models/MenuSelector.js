const CategoryRandomNumberGenerator = require('../utils/CategoryRandomNumberGenerator');
const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY_NUMBER, CATEGORIES } = require('../constants/constants');

class MenuSelector {
  #coachs;
  #weekCategories = [];

  constructor(coachs) {
    this.#coachs = coachs;
  }

  getCoachs() {
    return this.#coachs;
  }

  registerDislikeMenu() {
    this.#coachs.setDislikeMenu();
  }

  selectCategory() {
    const category = CATEGORY_NUMBER[CategoryRandomNumberGenerator.generate()];

    return category;
  }

  selectMenu(category) {
    const menu =
      CATEGORIES[category][
        Random.shuffle(
          CATEGORIES[category].map((_, i) => {
            return i + 1;
          })
        )[0] - 1
      ];

    return menu;
  }

  decideDayMenu(dayCategory, coach) {
    let menu;
    do {
      menu = this.selectMenu(dayCategory);
    } while (coach.hasSameMenu(menu) || coach.isDislikeMenu(menu));

    coach.setMenu(menu);
  }

  decideDayCategory() {
    let dayCategory;
    do {
      dayCategory = this.selectCategory();
    } while (this.countSameCategory(dayCategory) > 2);
    this.#weekCategories.push(dayCategory);
    return dayCategory;
  }

  decideWeekMenu(coach) {
    this.#weekCategories.forEach((dayCategory) => {
      this.decideDayMenu(dayCategory, coach);
    });
  }

  decideAllCoachWeekMenu() {
    for (let i = 0; i < 5; i += 1) this.decideDayCategory();
    this.#coachs.forEach((coach) => {
      this.decideWeekMenu(coach);
    });
  }

  countSameCategory(category) {
    return this.#weekCategories.filter(
      (dayCategory) => dayCategory === category
    ).length;
  }

  getWeekCategories() {
    return this.#weekCategories;
  }
}

module.exports = MenuSelector;
