const Category = require("../domain/Category");
const Coach = require("../domain/Coach");
const {
  AllCategory,
  AllMenu,
  ErrorMsg,
  StaticValues,
} = require("../static/Static");
const RandomNumberGenerator = require("../utils/RandomNumber");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class MenuController {
  #coachs;
  #category;

  constructor() {}

  validate(coachs) {
    if (
      coachs.length > StaticValues.EAT_TOGETHER_COUNT_MAX ||
      coachs.length < StaticValues.EAT_TOGETHER_COUNT_MIN
    )
      throw new Error(ErrorMsg.COACH_COUNT);
  }

  startRecommendMenu() {
    this.generateCategory(
      StaticValues.CATEGORY_RANGE_START,
      StaticValues.CATEGORY_RANGE_END
    );

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

      this.validate(coachs);

      this.#coachs = coachs;
      this.inputUnLikeMenu(0);
    });
  }

  inputUnLikeMenu(index) {
    if (index === this.#coachs.length) return this.makeRecommendMenu();
    InputView.readUnLikeMenu((input) => {
      this.#coachs[index].setUnLikeMenu(input);

      this.inputUnLikeMenu(index + 1);
    }, this.#coachs[index].getName());
  }

  generateCategory(categoryStart, categoryEnd) {
    const category = [];

    while (category.length < StaticValues.EAT_TOGHTHER_DAYS) {
      const categoryIndex =
        RandomNumberGenerator.generate(categoryStart, categoryEnd) - 1;
      const newCategory = AllCategory[categoryIndex];

      if (
        category.filter((v) => v === newCategory).length <
        StaticValues.CAN_DUPLICATE_CATEGORIE_COUNT
      )
        category.push(newCategory);
    }

    this.#category = new Category(category);
  }

  makeRecommendMenu() {
    const category = this.#category.getCategory();

    this.#coachs.forEach((coach) => {
      const unLikeMenu = coach.getUnLikeMenu();
      const recommendMenu = this.fillRecommendMenu(category, unLikeMenu);

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
    const randomIndex =
      RandomNumberGenerator.shuffle(
        Array(todayCategoryMenus.length)
          .fill(1)
          .map((v, i) => v + i)
      )[0] - 1;

    return todayCategoryMenus[randomIndex];
  }

  fillRecommendMenu(category, unLikeMenu) {
    const recommendMenu = [];
    let index = 0;

    while (recommendMenu.length < StaticValues.EAT_TOGHTHER_DAYS) {
      const todayCategoryMenus = AllMenu[category[index]];
      const todayCategoryMenu = this.getTodayCategoryMenu(todayCategoryMenus);
      if (
        unLikeMenu.includes(todayCategoryMenu) ||
        recommendMenu.includes(todayCategoryMenu)
      )
        continue;
      recommendMenu.push(todayCategoryMenu);
      index++;
    }
    return recommendMenu;
  }
}

module.exports = MenuController;
