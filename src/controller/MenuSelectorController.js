const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class MenuSelectorController {
  start() {
    OutputView.printInitialMessage();
    this.#readCoachNamesPhase();
  }

  #readCoachNamesPhase() {
    InputView.readCoachNames(this.#registerCoachPhase.bind(this));
  }

  #registerCoachPhase() {}
}

module.exports = MenuSelectorController;
