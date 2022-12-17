const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const CoachNamesChecker = require('../utils/CoachNamesChecker');
const Coach = require('../models/Coach');

class Service {
  #index;

  #instance = {
    coach: null,
  };

  constructor() {
    OutputView.printStart();
    this.#index = 0;
  }

  start() {
    InputView.readNames(this.#enterNames.bind(this));
  }

  #enterNames(names) {
    if (!CoachNamesChecker.checkInput(names)) {
      this.start();
      return;
    }

    this.#instance.coach = new Coach(names);

    if (!CoachNamesChecker.check(this.#instance.coach.get().names)) {
      this.start();
      return;
    }

    this.#enterHateMenus();
  }

  #enterHateMenus() {
    const { names } = this.#instance.coach.get();

    InputView.readHateMenus(
      names[this.#index],
      this.#setHateMenus.bind(this, names.length)
    );
  }

  #setHateMenus(length, hateMenus) {
    this.#index++;
    if (this.#index < length) {
      this.#enterHateMenus();
    }
  }
}

module.exports = Service;
