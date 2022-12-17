const { Validate } = require('../constant/Libs');
const Validation = require('../model/Validation');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  #coachName;
  constructor() {
    this.#coachName = [];
    this.#inputCoachName();
    this.turn = 0;
  }

  #inputCoachName() {
    InputView.readCoachName((name) => {
      this.#coachName = name.split(',');
      this.catchError('CoachName', name) ? this.#inputCoachNotEat() : this.#inputCoachName();
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

  #inputCoachNotEat() {
    InputView.readCoachNotEat(this.#coachName[this.turn], (notEat) => {
      this.catchError('CoachNotEat', notEat) && (this.turn += 1);
      this.turn >= this.#coachName.length ? this.move() : this.#inputCoachNotEat();
    });
  }

  move() {
    console.log('끝');
  }
}

module.exports = GameController;
