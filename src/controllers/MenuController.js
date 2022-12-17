const { readCoachNames } = require('../views/InputView');
const { printStart, printError } = require('../views/OutputView');
const { validateCoachNamesInput, validateCoachNames } = require('../utils/InputValidator');

class MenuController {
  startService() {
    printStart();
    readCoachNames(this.onReadCoachNames.bind(this));
  }

  onReadCoachNames(coachNamesInput) {
    try {
      validateCoachNamesInput(coachNamesInput);
      const coachNames = coachNamesInput.split(',');
      validateCoachNames(coachNames);
    } catch (err) {
      printError(err.message);
      readCoachNames(this.onReadCoachNames.bind(this));
    }
  }
}

module.exports = MenuController;
