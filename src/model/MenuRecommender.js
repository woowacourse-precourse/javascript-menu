const Coach = require('./Coach');
const randomGenerator = require('../util/randomGenerator');
const { CATEGORY, MENU } = require('../util/constants/string');
const { NUMBER } = require('../util/constants/number');
const { Random } = require('@woowacourse/mission-utils');

class MenuRecommender {
  #coaches = [];
  #categories = [];

  constructor(names) {
    this.#coaches = names.map((name) => new Coach(name));
  }

  getCoaches() {
    return this.#coaches;
  }

  getRandomCategory() {
    const randomIndex = randomGenerator.generateRandomCategoryNumber();
    return CATEGORY[randomIndex];
  }

  getRandomMenu(categoryIndex) {
    const menuArray = Object.values(MENU);
    const randomMenu = randomGenerator.ShuffleMenu(
      menuArray[categoryIndex - 1]
    )[0];
    return randomMenu;
  }

  getRecommendation() {
    this.getRecommendationCategories();
    this.getRecommendationMenus();
  }

  getRecommendationCategories() {
    const categories = [];
    while (categories.length < NUMBER.weekDays) {
      const category = CATEGORY[randomGenerator.generateRandomCategoryNumber()];
      if (!categories.includes(category)) {
        categories.push(category);
      }
    }
    this.#categories = categories;
  }

  getRecommendationMenus() {
    const indexArray = this.#categories.map((item) => CATEGORY.indexOf(item));
    this.#coaches.forEach((coach) => {
      indexArray.forEach((index) => {
        coach.addMenu(this.getRandomMenu(index));
      });
    });
  }
}

module.exports = MenuRecommender;
