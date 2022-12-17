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
      let index = 0;

      while (recommendMenu.length < 5) {
        const todayCategoryMenu =
          AllMenu[category[index]][
            RandomNumberGenerator.suffle(
              Array(AllMenu[category[index]].length)
                .fill(0)
                .map((v, i) => i)
            )[0]
          ];

        if (
          !unLikeMenu.includes(todayCategoryMenu) &&
          !recommendMenu.includes(todayCategoryMenu)
        ) {
          recommendMenu.push(todayCategoryMenu);
          index++;
        }
      }

      coach.setRecommendMenu(recommendMenu);
    });

    this.printResult();
  }

  printResult() {}
}

module.exports = MenuController;
