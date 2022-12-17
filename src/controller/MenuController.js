const Category = require("../domain/Category");
const Coach = require("../domain/Coach");
const { AllCategory } = require("../static/Static");
const RandomNumberGenerator = require("../utils/Utils");
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
    InputView.readUnLikeMenu((input) => {
      this.#coachs[index].setUnLikeMenu(input);

      if (index < this.#coachs.length - 1) this.inputUnLikeMenu(index + 1);
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
}

module.exports = MenuController;
