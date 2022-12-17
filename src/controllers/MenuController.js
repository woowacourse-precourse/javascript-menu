const { readCoachNames } = require('../views/InputView');
const { printStart, printError } = require('../views/OutputView');
const { validateCoachNamesInput, validateCoachNames } = require('../utils/InputValidator');
const MenuService = require('../models/MenuService');

class MenuController {
  #menuService;

  startService() {
    printStart();
    readCoachNames(this.onReadCoachNames.bind(this));
  }

  onReadCoachNames(coachNamesInput) {
    try {
      validateCoachNamesInput(coachNamesInput);
      const coachNames = coachNamesInput.split(',');
      validateCoachNames(coachNames);
      this.#menuService = new MenuService(coachNames);
    } catch (err) {
      printError(err.message);
      readCoachNames(this.onReadCoachNames.bind(this));
    }
  }
}

module.exports = MenuController;
