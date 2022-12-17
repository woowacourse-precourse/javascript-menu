const Coach = require('../models/Coach');
const MenuSelector = require('../models/MenuSelector');
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

  //[Coach(토미), Coach(제임스), ..]
  #registerCoachPhase(names) {
    new MenuSelector(
      names.split(',').map((name) => {
        new Coach(name);
      })
    );
  }
}

module.exports = MenuSelectorController;
