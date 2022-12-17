const validator = require('../utils/InputValidator');
const InputView = require('../view/inputView');
const OutputView = require('../view/OutputView');

class Controller {
  #coachNames;
  #hateMenus;
  #count;

  constructor() {
    this.#coachNames;
    this.#hateMenus;
    this.#count = 1;
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
      this.inputHateMenu();
    } catch {
      this.inputCoachName();
    }
  }

  inputHateMenu() {
    InputView.readHateMenu(
      this.getHateMenu.bind(this),
      this.#coachNames,
      this.#count
    );
  }

  getHateMenu(menus) {
    try {
      let coachNum = this.#coachNames.length;
      this.#hateMenus = menus.split(',');
      this.checkCoachNum(coachNum);
      validator.hateMenuValidate(this.#hateMenus, this.#coachNames);
    } catch {
      this.inputHateMenu();
    }
  }

  checkCoachNum(coachNum) {
    if (this.#count < coachNum) {
      this.#count += 1;
      this.inputHateMenu();
    }
  }
}

module.exports = Controller;
