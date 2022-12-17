const { Random } = require('@woowacourse/mission-utils');
const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Validator = require('../utils/Validator');
const Utils = require('../utils/Utils');
const Coach = require('../model/Coach');
const Menus = require('../model/Menus');
const IO = require('../utils/IO');

class RecommendController {
  #coaches;

  #menus;

  #categories;

  constructor(sample) {
    OutputView.printStart();
    this.#menus = new Menus(sample);
    this.#categories = [];
  }

  inputCoachName() {
    InputView.inputCoachName((names) => {
      Validator.handleException(
        () => Validator.coachValidate(names),
        () => this.createCoaches(names),
        () => this.inputCoachName(),
      );
    });
  }

  createCoaches(names) {
    const coachList = Utils.divideString(names);
    const coachObjectList = coachList.map((name) => new Coach(name));

    this.#coaches = coachObjectList;
    this.inputCoachCantEatMenus(0);
  }

  inputCoachCantEatMenus(coachIndex) {
    InputView.inputCantEatMenu(this.#coaches[coachIndex].getName(), (menus) => {
      Validator.handleException(
        () => Validator.coachCantEatMenuValidate(menus),
        () => this.repeatCoachCantEatMenus(menus, coachIndex),
        () => this.inputCoachCantEatMenus(coachIndex),
      );
    });
  }

  repeatCoachCantEatMenus(menus, coachIndex) {
    if (coachIndex + 1 !== this.#coaches.length) {
      this.#coaches[coachIndex].setCantEatMenu(menus);

      this.inputCoachCantEatMenus(coachIndex + 1);
    }
    if (coachIndex + 1 === this.#coaches.length) {
      this.repeatWeekOfDaysCategory();
    }
  }

  repeatWeekOfDaysCategory() {
    for (let i = 0; i < 5; i++) {
      this.recommendCategory();
    }
    this.repeatInsertCoaches();

    this.printResult();
  }

  repeatInsertCoaches() {
    this.#coaches.forEach((coach) => {
      this.#categories.forEach((category) => {
        const categoryNum = this.#menus.getCategoryNum(category);
        const categoryMenus = this.#menus.getCategoryMenu(categoryNum);
        this.insertRecommendToCoach(categoryMenus, coach);
      });
    });
  }

  checkValidNum(value) {
    if (value != null) return true;
    return false;
  }

  checkRepeatCategory(category) {
    const sameCategoryNum = this.#categories.filter(
      (categoryElement) => categoryElement === category,
    );
    if (sameCategoryNum < 2) return true;
    return false;
  }

  checkValidCategory(category, categoryMenus) {
    if (
      this.checkRepeatCategory(category) &&
      this.checkValidNum(category) &&
      this.checkValidNum(categoryMenus)
    )
      return true;
    return false;
  }

  recommendCategory() {
    const randomNum = Random.pickNumberInRange(1, 5);
    const category = this.#menus.getCategory(randomNum);
    const categoryMenus = this.#menus.getCategoryMenu(randomNum);

    if (this.checkValidCategory(category, categoryMenus)) {
      this.#categories.push(category);
      return;
    }
    this.recommendCategory();
  }

  insertRecommendToCoach(menus, coach) {
    const menuIndex = menus.map((__, index) => index + 1);
    const recommendedMenuIndex = Random.shuffle(menuIndex)[0];
    const recommendedMenu = menus[recommendedMenuIndex - 1];

    if (this.checkValidCoachMenu(coach, recommendedMenu)) {
      coach.setRecommended(recommendedMenu);
      return;
    }
    this.insertRecommendToCoach();
  }

  checkValidCoachMenu(coach, recommendedMenu) {
    if (
      coach.checkCanEatMenu(recommendedMenu) &&
      coach.checkNotRepeatMenu(recommendedMenu)
    )
      return true;
    return false;
  }

  printResult() {
    OutputView.printResult(this.#categories, this.#coaches);
    IO.close();
  }
}

module.exports = RecommendController;
