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
      this.repeatWeekCategory();
    }
  }

  // 함수명수정
  repeatWeekCategory() {
    for (let i = 0; i < 5; i++) {
      this.recommendCategory();
    }
    this.printResult();
  }

  checkValidNum(value) {
    if (value != null) return true;
    return false;
  }

  checkRepeatCategory(category) {
    if (
      this.#categories.filter(
        (categoryElement) => categoryElement === category,
      ) < 2
    )
      return true;
    return false;
  }

  checkValidCategory(category, categoryMenus) {
    if (
      this.checkRepeatCategory(category) &&
      this.checkValidNum(category) &&
      this.checkValidNum(categoryMenus)
    ) {
      return true;
    }
    return false;
  }

  recommendCategory() {
    const randomNum = Random.pickNumberInRange(1, 5);
    const category = this.#menus.getCategory(randomNum);
    const categoryMenus = this.#menus.getCategoryMenu(randomNum);

    if (this.checkValidCategory(category, categoryMenus)) {
      this.#categories.push(category);
      this.#coaches.forEach((coach) => {
        this.insertRecommendToCoach(categoryMenus, coach);
      });
    } else {
      this.recommendCategory();
    }
  }

  insertRecommendToCoach(menus, coach) {
    const menuIndex = menus.map((__, index) => index);
    const recommendedMenuIndex = Random.shuffle(menuIndex)[0]; //shuffle 이상함..
    const recommendedMenu = menus[recommendedMenuIndex];

    if (
      coach.checkCanEatMenu(recommendedMenu) &&
      coach.checkNotRepeatMenu(recommendedMenu)
    ) {
      coach.setRecommended(recommendedMenu);
    } else {
      this.insertRecommendToCoach();
    }
  }

  printResult() {
    OutputView.printResult(this.#categories, this.#coaches);
    IO.close();
  }
}

module.exports = RecommendController;
