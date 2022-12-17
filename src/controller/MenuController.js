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

    this.#inputNonEdibleMenus();
  }

  #inputNonEdibleMenus() {
    const coaches = this.#menuService.getCoachesName();

    InputView.askNonEdibleMenus(coaches, this.#validateNonEdibleMenus.bind(this));
  }

  #validateNonEdibleMenus(menus) {
    console.log(menus);
  }
}

module.exports = MenuController;
