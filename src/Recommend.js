const { CATEGORIES, MENUS } = require('./constants/condition.js');
const { Random } = require('@woowacourse/mission-utils');

class Recommend {
  #coachNames;
  #antiFoods;
  #categories;
  #menus;

  constructor(coachNames) {
    this.#coachNames = coachNames;
    this.#antiFoods = [];
    this.#categories = [];
    this.#menus = [];
  }

  getCoachNames() {
    return this.#coachNames;
  }

  getMenus() {
    return this.#menus;
  }

  getCategories() {
    return this.#categories;
  }

  setAntiFood(antiFoodArr) {
    this.#antiFoods.push(antiFoodArr);
  }

  recommendCategory() {
    while (true) {
      const randomCategoryNumber = Random.pickNumberInRange(1, 5);
      const recommendedCategory = CATEGORIES[randomCategoryNumber];

      if (this.categoryDuplicateCheck) {
        this.#categories.push(recommendedCategory);
        return;
      }
    }
  }

  categoryDuplicateCheck(recommendedCategory) {
    const duplicateCount = this.#categories.filter((category) => {
      return category === recommendedCategory;
    }).length;

    return duplicateCount < 2;
  }

  recommendMenu() {
    this.#antiFoods.map((antiFoodArr, idx) => {
      while (true) {
        const latestCategory = this.#categories[this.#categories.length - 1];

        const targetMenus = MENUS[latestCategory].split(', ');

        const targetMenuIdxArr = targetMenus.map((_, idx) => idx);
        const randomNum = Random.shuffle(targetMenuIdxArr)[0];

        const recommendedMenu = targetMenus[randomNum];

        if (antiFoodArr.includes(recommendedMenu)) continue;
        if (this.#menus[idx] && this.#menus[idx].includes(recommendedMenu)) continue;

        if (this.#menus[idx]) {
          this.#menus[idx].push(recommendedMenu);
        } else {
          this.#menus.push([recommendedMenu]);
        }
        return;
      }
    });
  }
}

module.exports = Recommend;
