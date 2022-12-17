const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY, MENUS } = require('../Util/Constants');

class Coach {
  #name;

  #weeklyCategory;

  #exceptFoodList;

  #weeklyFoodList;

  constructor(name, weeklyCategory, exceptFoodList) {
    this.#name = name;
    this.#weeklyCategory = weeklyCategory;
    this.#exceptFoodList = exceptFoodList;
    this.#weeklyFoodList = [];
  }

  recommendFood(category) {}
}

module.exports = Coach;
