const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class MenuController {
  start() {
    OutputView.printStart();
    this.inputCoachName();
  }

  inputCoachName() {
    const nameList = InputView.readCoachName();
  }
}

module.exports = MenuController;
