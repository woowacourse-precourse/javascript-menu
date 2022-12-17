const { Randoms } = require("@woowacourse/mission-utils");
const GetOccurrence = require("../utils/GetOccurrence");
const { GIVEN_DATA } = require("../constants/Data");

class CategoryModel {
  #categories;
  #coachNames;

  constructor() {
    this.#categories = [];
    this.#coachNames = [];
  }

  getCoachNames() {
    return this.#coachNames;
  }

  setCoachNames(newCoachNames) {
    this.#coachNames = newCoachNames;
  }

  generateCategories() {
    const categories = [];
    while (categories.length < 5) {
      const randomCategory = GIVEN_DATA.CATEGORIES[Randoms.pickNumberInRange(1, 5) - 1];
      if (GetOccurrence.get(randomCategory) < 2) categories.push(randomCategory);
    }

    this.#categories = categories;
  }
}

module.exports = CategoryModel;
