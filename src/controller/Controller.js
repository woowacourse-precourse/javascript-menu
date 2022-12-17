const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Validation = require('../utils/Validation');
const { MESSAGE } = require('../utils/constants');

class Controller {
  init() {
    OutputView.printMessage(MESSAGE.serviceStart);

    this.inputCoaches();
  }

  inputCoaches() {
    InputView.readCoaches(this.validateCoaches.bind(this));
  }

  validateCoaches(coaches) {
    try {
      Validation.checkBlank(coaches);
      Validation.checkStringType(coaches);
      Validation.checkValidLengthOfCoaches(coaches);
    } catch (error) {
      OutputView.printMessage(error);
      this.inputCoaches();
    }
  }
}

module.exports = Controller;
