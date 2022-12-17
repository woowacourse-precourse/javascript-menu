const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const { MESSAGE } = require('../utils/constants');

class Controller {
  init() {
    OutputView.printMessage(MESSAGE.serviceStart);

    this.inputCoaches();
  }

  inputCoaches() {
    InputView.readCoaches(this.validateCoaches.bind(this));
  }

  validateCoaches(coaches) {}
}

module.exports = Controller;
