const { Validate } = require('../constant/Libs');
const MenuEnroll = require('../model/MenuEnroll');
const MenuPicker = require('../model/MenuPicker');
const MenuSelect = require('../model/MenuSelect');
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
      this.turn >= this.#coachName.length ? this.makeMenu() : this.#inputCoachNotEat();
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

  makeMenu() {
    const weekcategory = new MenuPicker().weekPick();
    const menu = new MenuSelect(
      [this.#coachName, this.#coachNotWant],
      weekcategory
    ).makeTodayMenu();
    OutputView.printMenu(this.#coachName, menu);
  }
}

module.exports = GameController;
