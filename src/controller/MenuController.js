const Validator = require('../utils/Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class MenuController {
  startRecommend() {
    OutputView.printStartRecommend();

    this.#inputCoachesName();
  }

  #inputCoachesName() {
    InputView.askCoachesName(this.#validateCoachesName.bind(this));
  }

  #validateCoachesName(names) {
    try {
      Validator.throwErrorIfInvalidCoachesName(names);
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      this.#inputCoachesName();
    }

    this.#onInputCoachesName(names);
  }

  #onInputCoachesName(names) {}
}

module.exports = MenuController;
