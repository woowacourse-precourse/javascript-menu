const OutputView = require("./UI/OutView");
const { MENU, REPLACEMENT, FOOD_CATEGORY } = require("./Utils/Constants");
const { COMMA, LINE } = REPLACEMENT;

const { pickNumber, shuffle } = require("./Utils/MissionUtils");

class RecommendationMenuMaker {
  #menu = {};
  #category;
  #coaches;
  #doNotEat;

  chooseCategory(name, menu) {
    this.#coaches = name;
    this.#doNotEat = menu;

    const category = [];
    for (let index = 0; index < 5; index++) {
      category.push(FOOD_CATEGORY[pickNumber()]);
    }

    if (this.hasDulicate(category)) {
      this.chooseCategory();
    }

    this.#category = category;

    return this.chooseMenu();
  }

  hasDulicate(category) {
    const numberOfDulicate = category.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

    return Object.values(numberOfDulicate).filter((num) => num > 2).length; // 중복 없으면 0
  }

  chooseMenu() {
    let result = [];
    for (let index = 0; index < 5; index++) {
      const menus = MENU[this.#category[index]];
      const pickOne = shuffle()[0];
      result.push(menus[pickOne]);
    }

    return this.designResult(result);
  }

  designResult(result) {
    const category = String(this.#category).replaceAll(COMMA, LINE);
    const design = String(result).replaceAll(COMMA, LINE);

    return OutputView.printResult(category, design, this.#coaches);
  }
}

module.exports = RecommendationMenuMaker;
