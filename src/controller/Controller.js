const { readCoachName } = require('../view/InputView');
const { printStart } = require('../view/OutputView');

class Controller {
  start() {
    printStart();

    readCoachName();
  }
}

module.exports = Controller;
