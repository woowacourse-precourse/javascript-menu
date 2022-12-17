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
    let newFoodNo =
      generateNewRecommendedFood(
        [...Array(foodNames[category].length)].map((_, i) => i + 1)
      ) - 1;
    let idx = 0;
    while (idx < 9) {
      const newFood = convertNumberToFoodName(category, newFoodNo);
      if (
        !checkDuplicateFood(this.#recommendedFoods, newFood) &&
        !this.#cantFoods.includes(newFood)
      )
        break;
      newFoodNo += 1;
      idx += 1;
    }
    this.#recommendedFoods.push(convertNumberToFoodName(category, newFoodNo));
  }
}

module.exports = Coach;
