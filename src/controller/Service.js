const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

class Service {
  constructor() {
    OutputView.printStart();
  }

  start() {
    InputView.readNames(this.#enterNames.bind(this));
  }

  #enterNames(names) {}
}

module.exports = Service;
