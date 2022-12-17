const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
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
    this.#instance.coach = new Coach(names);
  }
}

module.exports = Service;
