const MenuService = require('../service/MenuService');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../utils/Validator');
const { REGEX } = require('../constants');

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
    const coaches = names.replace(REGEX.SPACE, '').split(',');
    this.#menuService.addCoaches(coaches);

    this.#inputNonEdibleMenus(coaches);
  }

  #inputNonEdibleMenus(coaches) {
    const lastCoachName = coaches[coaches.length - 1];
    InputView.askNonEdibleMenus(coaches[0], (menus) => {
      try {
        this.#validateNonEdibleMenus(menus);
      } catch ({ message }) {
        OutputView.printErrorMessage(message);
        return this.#inputNonEdibleMenus(coaches);
      }
      if (coaches[0] !== lastCoachName) {
        return this.#onInputNonEdibleMenus(coaches.slice(1), menus);
      }
      this.#onInputNonEdibleMenus(coaches[0], menus);
    });
  }

  #validateNonEdibleMenus(menus) {
    Validator.throwErrorIfInvalidNonEdibleMenus(menus);
  }

  #onInputNonEdibleMenus(coachName, menus) {}
}

module.exports = MenuController;
