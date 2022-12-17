const validator = require('../utils/InputValidator');
const InputView = require('../view/inputView');
const OutputView = require('../view/OutputView');

class Controller {
  #coachNames;

  constructor() {
    this.#coachNames;
  }
  start() {
    OutputView.printServiceStart();
    this.inputCoachName();
  }

  inputCoachName() {
    InputView.readCoachName(this.getCoachName.bind(this));
  }

  getCoachName(names) {
    try {
      this.#coachNames = names.split(',');
      validator.coachValidate(this.#coachNames);
    } catch {
      this.inputCoachName();
    }
  }
}

module.exports = Controller;
