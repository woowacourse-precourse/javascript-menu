const { Random } = require('@woowacourse/mission-utils');
const { MENU, WEEK, CATEGORY } = require('../constants/Constants');

const MenuRecommender = class {
  recommend(names, hateMenus) {
    const recommendList = {};

    names.reduce((recommendList, name, i) => {
      recommendList[`${name}`] = this.#personalRecommend(name, hateMenus[i]);
    }, {});
  }

  #personalRecommend(name, hateMenus) {}

  initWeekCategory() {
    const category = [];

    while (category.length < WEEK.size) {
      const selected = Random.pickNumberInRange(1, CATEGORY.size);
      if (!this.#isAlreadyHave(category, selected)) category.push(selected);
    }
    console.log(category);
    return category;
  }

  #isAlreadyHave(category, selected) {
    const duplicatedCount = category.filter(
      (already) => already === selected
    ).length;
    if (duplicatedCount >= CATEGORY.max) return true;
    return false;
  }
};

const a = new MenuRecommender();
a.initWeekCategory();
module.exports = MenuRecommender;
