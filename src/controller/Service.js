const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const CoachNamesChecker = require('../utils/CoachNameChecker');
const Coach = require('../models/Coach');

class Service {
  #instance = {
    coach: null,
  };

  constructor() {
    OutputView.printStart();
  }

  start() {
    InputView.readNames(this.#enterNames.bind(this));
  }

  #enterNames(names) {
    if (!CoachNamesChecker.checkInput(names)) {
      this.start();
      return;
    }
    this.#instance.coach = new Coach(names);

    this.#enterHateMenus();
  }

  #enterHateMenus() {}
}

module.exports = Service;
