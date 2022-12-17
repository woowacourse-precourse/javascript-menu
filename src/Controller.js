const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Controller {
  #coachNames;

  start() {
    OutputView.printStart();
    this.getName();
  }

  getName() {
    InputView.readName(this.setName.bind(this));
  }

  setName(name) {
    this.#coachNames = name;
  }
}

module.exports = Controller;
