const { FOOD, DAYS, MAX_SAME_CATEGORY_RECOMMENDATION } = require('../settings');

const CATEGORIES = Object.keys(FOOD);

class Category {
  #categories = [];

  static getRandomNumber(pickNumberInRange) {
    const MIN_NUMBER = 1;
    const MAX_NUMBER = CATEGORIES.length;

    return pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
  }

  static recommendOneDay(pickNumberInRange) {
    const randomNumber = Category.getRandomNumber(pickNumberInRange);

    return CATEGORIES[randomNumber - 1];
  }

  recommendAllDays(pickNumberInRange) {
    while (this.#categories.length < DAYS.length) {
      const recommendedCategory = Category.recommendOneDay(pickNumberInRange);
      const sameCategorysRecommended = this.#categories.filter(
        (category) => category === recommendedCategory,
      );
      const IsRecommendable = sameCategorysRecommended.length < MAX_SAME_CATEGORY_RECOMMENDATION;

      if (IsRecommendable) {
        this.#categories.push(recommendedCategory);
      }
    }

    return this.#categories;
  }
}

module.exports = Category;
