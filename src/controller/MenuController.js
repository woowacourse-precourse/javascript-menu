const Category = require("../domain/Category");
const Coach = require("../domain/Coach");
const { AllCategory, AllMenu } = require("../static/Static");
const RandomNumberGenerator = require("../utils/RandomNumber");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class MenuController {
  #coachs;
  #category;

  constructor() {}

  startRecommendMenu() {
    this.generateCategory();

    OutputView.printStart();

    this.inputCoachName();
  }

  inputCoachName() {
    InputView.readCoachName((input) => {
      const coachNames = input.split(",");
      const coachs = [];

      coachNames.forEach((coachName) => {
        coachs.push(new Coach(coachName));
      });

      this.#coachs = coachs;
      this.inputUnLikeMenu(0);
    });
  }

  inputUnLikeMenu(index) {
    if (index === this.#coachs.length) return this.recommendMenu();
    InputView.readUnLikeMenu((input) => {
      this.#coachs[index].setUnLikeMenu(input);

      this.inputUnLikeMenu(index + 1);
    }, this.#coachs[index].getName());
  }

  generateCategory() {
    const category = [];

    while (category.length < 5) {
      const newCategory = AllCategory[RandomNumberGenerator.generate(1, 5) - 1];

      if (category.filter((v) => v === newCategory).length < 2)
        category.push(newCategory);
    }

    this.#category = new Category(category);
  }

  recommendMenu() {
    const category = this.#category.getCategory();

    this.#coachs.forEach((coach) => {
      const unLikeMenu = coach.getUnLikeMenu();
      const recommendMenu = [];

      this.fillRecommendMenu(recommendMenu, category, unLikeMenu);
      coach.setRecommendMenu(recommendMenu);
    });

    this.printResult();
  }

  printResult() {
    OutputView.printResult();
    OutputView.printCategory(this.#category.getCategory());

    this.#coachs.forEach((coach) => {
      OutputView.printMenu(coach.getName(), coach.getRecommendMenu());
    });

    OutputView.printEnd();
  }

  getTodayCategoryMenu(todayCategoryMenus) {
    return todayCategoryMenus[
      RandomNumberGenerator.shuffle(
        Array(todayCategoryMenus.length)
          .fill(0)
          .map((v, i) => i)
      )[0] - 1
    ];
  }

  fillRecommendMenu(recommendMenu, category, unLikeMenu) {
    let index = 0;

    while (recommendMenu.length < 5) {
      const todayCategoryMenus = AllMenu[category[index]];
      const todayCategoryMenu = this.getTodayCategoryMenu(todayCategoryMenus);

      if (
        !unLikeMenu.includes(todayCategoryMenu) &&
        !recommendMenu.includes(todayCategoryMenu)
      ) {
        recommendMenu.push(todayCategoryMenu);
        index++;
      }
    }
  }
}

module.exports = MenuController;
