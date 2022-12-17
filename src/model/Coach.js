const { Random } = require("@woowacourse/mission-utils");
const { GIVEN_DATA } = require("../constants/Data");
const CategoryConverter = require("../utils/CategoryConverter");

class Coach {
  #name;
  #hateFood;
  #recommendedFood;

  constructor(name, hateFood) {
    this.#name = name;
    this.#hateFood = hateFood;
    this.#recommendedFood = [];
  }

  #getRandomFood(categoryFood) {
    return categoryFood[
      Random.shuffle(Array.from({ length: categoryFood.length }, (x, i) => i + 1))[0] - 1
    ];
  }

  generateRecommendedFood(category) {
    const categoryFood = GIVEN_DATA[CategoryConverter.convert(category)];
    let targetFood = this.#getRandomFood(categoryFood);
    while (
      this.#recommendedFood.includes(targetFood) ||
      this.#hateFood.includes(targetFood)
    ) {
      targetFood = this.#getRandomFood(categoryFood);
    }
    this.#recommendedFood.push(targetFood);
  }

  getCoachInformation() {
    return {
      name: this.#name,
      hateFood: this.#hateFood,
      recommendedFood: this.#recommendedFood,
    };
  }
}

module.exports = Coach;
