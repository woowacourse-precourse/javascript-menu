const { Console } = require('@woowacourse/mission-utils');

const MenuService = require('../service/MenuService');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../utils/Validator');
const toArray = require('../utils/toArray');

class MenuController {
  #menuService;

  constructor() {
    this.#menuService = new MenuService();
  }

  startRecommend() {
    OutputView.printStartRecommend();

    this.#inputCoachesName();
  }

  #inputCoachesName() {
    InputView.askCoachesName(this.#validateCoachesName.bind(this));
  }

  #validateCoachesName(names) {
    try {
      Validator.throwErrorIfInvalidCoachesName(names);
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      this.#inputCoachesName();
    }

    this.#onInputCoachesName(names);
  }

  #onInputCoachesName(names) {
    const coaches = toArray(names);
    this.#menuService.addCoaches(coaches);

    this.#inputNonEdibleMenus(coaches);
  }

  #inputNonEdibleMenus(coaches) {
    const lastCoachName = coaches[coaches.length - 1];
    InputView.askNonEdibleMenus(coaches[0], (menus) => {
      try {
        if (menus.length > 0) this.#validateNonEdibleMenus(toArray(menus));
      } catch ({ message }) {
        OutputView.printErrorMessage(message);
        return this.#inputNonEdibleMenus(coaches);
      }
      this.#onInputNonEdibleMenus(coaches[0], toArray(menus));
      if (coaches[0] !== lastCoachName) return this.#inputNonEdibleMenus(coaches.slice(1));

      this.#recommend();
    });
  }

  #validateNonEdibleMenus(menus) {
    Validator.throwErrorIfInvalidNonEdibleMenus(menus);
  }

  #onInputNonEdibleMenus(coachName, menus) {
    if (menus.length > 0) {
      this.#menuService.addNonEdibleMenus(coachName, menus);
    }
  }

  #recommend() {
    this.#menuService.recommend();

    this.#printResult();
  }

  #printResult() {
    const { categoriesOfDays, coachesName, menus } = this.#menuService.getResult();

    OutputView.printRecommendResult(categoriesOfDays, coachesName, menus);

    this.#exit();
  }

  #exit() {
    Console.close();
  }
}

module.exports = MenuController;
