const { Random } = require('@woowacourse/mission-utils');
const { MENU, WEEK, CATEGORY } = require('../constants/Constants');

const MenuRecommender = class {
  recommend(names, hateMenus) {
    const weekCategory = this.#initWeekCategory();
    const recommendList = {};

    names.reduce((recommendList, name, i) => {
      recommendList[`${name}`] = this.#personalRecommend(name, hateMenus[i]);
    }, {});
  }

  #personalRecommend(weekCategory, name, hateMenus) {}

  #initWeekCategory() {
    const category = [];

    while (category.length < WEEK.size) {
      const selected = Random.pickNumberInRange(1, CATEGORY.size);
      if (!this.#isAlreadyHave(category, selected)) category.push(selected);
    }
    return category;
  }

  #isAlreadyHave(category, selected) {
    const duplicatedCount = category.filter(
      (already) => already === selected
    ).length;
    return duplicatedCount >= CATEGORY.max;
  }
};

const a = new MenuRecommender();
module.exports = MenuRecommender;
