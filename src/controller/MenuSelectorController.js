const OutputView = require('../views/OutputView');

class MenuSelectorController {
  start() {
    OutputView.printInitialMessage();
    this.#readCoachNamesPhase();
  }

  #readCoachNamesPhase() {}
}

module.exports = MenuSelectorController;
