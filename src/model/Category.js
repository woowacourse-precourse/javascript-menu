const { FOOD, DAYS, MAX_SAME_CATEGORY_RECOMMENDATION } = require('../settings');

const CATEGORYS = Object.keys(FOOD);

class Category {
  #categorys = [];

  static getRandomNumber(pickNumberInRange) {
    const MIN_NUMBER = 1;
    const MAX_NUMBER = CATEGORYS.length;

    return pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
  }

  static recommendOneDay(pickNumberInRange) {
    const randomNumber = Category.getRandomNumber(pickNumberInRange);

    return CATEGORYS[randomNumber - 1];
  }

  recommendAllDays(pickNumberInRange) {
    while (this.#categorys.length < DAYS.length) {
      const recommendedCategory = Category.recommendOneDay(pickNumberInRange);
      const sameCategorysRecommended = this.#categorys.filter(
        (category) => category === recommendedCategory,
      );
      const IsRecommendable = sameCategorysRecommended.length < MAX_SAME_CATEGORY_RECOMMENDATION;

      if (IsRecommendable) {
        this.#categorys.push(recommendedCategory);
      }
    }

    return this.#categorys;
  }
}

module.exports = Category;
