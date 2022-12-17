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

  constructor(sample) {
    OutputView.printStart();
    this.#menus = new Menus(sample);
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
      this.recommendCategory();
    }
  }

  recommendCategory() {
    const categoryMenus = this.#menus.getCategory(
      Random.pickNumberInRange(1, 5),
    );
  }
}

module.exports = RecommendController;
