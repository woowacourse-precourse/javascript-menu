const { FOOD_NAMES } = require('./Constants');
const { checkDuplicateFood } = require('./utils/Checker');
const { convertNumberToFoodName } = require('./utils/Converter');
const { generateNewRecommendedFood } = require('./utils/Generator');

const foodNames = [, ...Object.values(FOOD_NAMES)];

class Coach {
  #name;
  #cantFoods;
  #recommendedFoods;
  constructor(name, cantFoods) {
    this.#name = name;
    this.#cantFoods = cantFoods;
    this.#recommendedFoods = [];
  }

  printInfo(printFunc) {
    printFunc([this.#name, ...this.#recommendedFoods]);
  }

  /**
   *
   * @param {number} category 카테고리 번호
   */
  recommendFood(category) {
    const newFoodNo =
      generateNewRecommendedFood(
        [...Array(foodNames[category])].map((_, i) => i + 1)
      ) - 1;
    const newFood = convertNumberToFoodName(category, newFoodNo);
    if (
      checkDuplicateFood(this.#recommendedFoods, newFood) ||
      this.#cantFoods.includes(newFood)
    )
      return this.recommendFood.call(this, category);
    this.#recommendedFoods.push(newFood);
  }
}

module.exports = Coach;
