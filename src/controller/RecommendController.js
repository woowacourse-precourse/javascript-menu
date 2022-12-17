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
  }

  checkValidCategory(categoryNum, categoryMenus) {
    if (categoryMenus !== null) return true;
    if (this.#categories.filter(categoryNum) < 2) return true;
    this.recommendCategory();
    return false;
  }

  recommendCategory() {
    const randomNum = Random.pickNumberInRange(1, 5);
    const categoryMenus = this.#menus.getCategory(randomNum);
    if (this.checkValidCategory(randomNum, categoryMenus)) {
      this.#categories.push(this.#menus.getCategory(randomNum));
      this.#coaches.forEach((coach) =>
        this.insertRecommendToCoach(categoryMenus, coach),
      );
    }
  }

  insertRecommendToCoach(menus, coach) {
    const recommendedMenu = Random.shuffle([0, 1, 2])[0]; //shuffle 이상함..

    if (
      coach.checkCanEatMenu(recommendedMenu) &&
      coach.checkNotRepeatMenu(recommendedMenu)
    ) {
      coach.setRecommended(recommendedMenu);
    }
  }
}

module.exports = RecommendController;
