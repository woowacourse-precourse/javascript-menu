const { Validate } = require('../constant/Libs');
const MenuEnroll = require('../model/MenuEnroll');
const Validation = require('../model/Validation');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  #coachName;
  #coachNotWant;
  constructor() {
    this.#coachName = [];
    this.#coachNotWant = [];
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
      this.catchError('CoachNotEat', notEat) &&
        this.#checkInMenu(notEat.split(',')) &&
        (this.turn += 1);
      this.turn >= this.#coachName.length ? this.move() : this.#inputCoachNotEat();
    });
  }

  #checkInMenu(value) {
    try {
      const judge = new MenuEnroll(value);
      this.#coachNotWant.push(judge.getNotWantMenu());
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  move() {
    console.log(this.#coachNotWant);
    console.log('끝');
  }
}

module.exports = GameController;
