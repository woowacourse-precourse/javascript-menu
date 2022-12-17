const { Validate } = require('../constant/Libs');
const Validation = require('../model/Validation');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  constructor() {
    this.#inputCoachName();
  }

  #inputCoachName() {
    InputView.readCoachName((name) => {
      this.catchError('CoachName', name) ? console.log('굿') : this.#inputCoachName();
    });
  }

  catchError(name, value) {
    try {
      Validate[name](value);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }
}

module.exports = GameController;
