const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const CoachNamesChecker = require('../utils/CoachNamesChecker');
const HateMenusChecker = require('../utils/HateMenusChecker');
const CoachNames = require('../models/CoachNames');
const CoachHateMenus = require('../models/CoachHateMenus');

class Service {
  #index;

  #instance = {
    coachNames: null,
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
    this.#instance.coachNames = new CoachNames(names);
    if (!CoachNamesChecker.check(this.#instance.coachNames.get())) {
      this.start();
      return;
    }

    this.#instance.coachHateMenus = new CoachHateMenus();
    this.#enterHateMenus();
  }

  #enterHateMenus() {
    const names = this.#instance.coachNames.get();

    InputView.readHateMenus(
      names[this.#index],
      this.#setHateMenus.bind(this, names.length)
    );
  }

  #setHateMenus(length, hateMenus) {
    if (!HateMenusChecker.checkInput(hateMenus)) {
      this.#enterHateMenus();
      return;
    }
    this.#instance.coachHateMenus.set(hateMenus);
    if (!HateMenusChecker.check(this.#instance.coachHateMenus.get())) {
      this.#enterHateMenus();
      return;
    }
    this.#index += 1;
    if (this.#index < length) {
      this.#enterHateMenus();
    }
  }
}

module.exports = Service;
