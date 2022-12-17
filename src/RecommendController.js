const OutputView = require('./views/OutputView.js');
const InputView = require('./views/InputView.js');
const Validation = require('./Validation.js');
const Recommend = require('./Recommend.js');
const { Console } = require('@woowacourse/mission-utils');
const inputErrorHandler = require('./utils/inputErrorHandler.js');

class RecommendController {
  #recommend;

  play() {
    OutputView.printRecommendStartMsg();

    this.#requestCoachName();
  }

  #requestCoachName() {
    InputView.readCoachName((coachNames) => {
      const isValidInput = inputErrorHandler(Validation.validateCoachNames, coachNames);

      if (!isValidInput) {
        this.#requestCoachName();
        return;
      }

      this.#nameSavePhase(coachNames);
    });
  }

  #nameSavePhase(coachNames) {
    const coachNameArr = coachNames.split(',');

    this.#recommend = new Recommend(coachNameArr);

    this.#requestAntiFood(coachNameArr);
  }

  #requestAntiFood(coachNameArr) {
    coachNameArr.forEach((coachName) => {
      InputView.readAntiFood(coachName, (antiFood) => {
        const isValidInput = inputErrorHandler(Validation.validateAntiFood, antiFood);

        if (!isValidInput) {
          this.#requestAntiFood(coachNameArr);
          return;
        }

        const remainCoachArr = coachNameArr.slice(1);
        this.#antiFoodSavePhase(antiFood, remainCoachArr);
      });
    });
  }

  #antiFoodSavePhase(antiFood, remainCoachArr) {
    const antiFoodArr = antiFood.split(',');
    this.#recommend.setAntiFood(antiFoodArr);

    if (remainCoachArr.length) {
      this.#requestAntiFood(remainCoachArr);
      return;
    }

    this.#recommendCategoryPhase();
  }

  #recommendCategoryPhase() {
    this.#recommend.recommendCategory();

    this.#recommendMenu();
  }

  #recommendMenu() {
    this.#recommend.recommendMenu();

    const recommendedMenuCount = this.#recommend.getMenus()[0].length;
    if (recommendedMenuCount < 5) {
      this.#recommendCategoryPhase();
      return;
    }

    this.#endPhase();
  }

  #endPhase() {
    const categories = this.#recommend.getCategories();
    const coachNames = this.#recommend.getCoachNames();
    const menus = this.#recommend.getMenus();

    OutputView.printRecommendResult(categories, coachNames, menus);
    Console.close();
  }
}

module.exports = RecommendController;
