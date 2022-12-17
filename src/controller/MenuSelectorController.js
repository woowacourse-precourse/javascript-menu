const Coach = require('../models/Coach');
const MenuSelector = require('../models/MenuSelector');
const Validator = require('../utils/Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class MenuSelectorController {
  #menuSelector;
  #tempDislikeMenu = [];

  start() {
    OutputView.printInitialMessage();
    this.#readCoachNamesPhase();
  }

  #readCoachNamesPhase() {
    InputView.readCoachNames(this.#registerCoachPhase.bind(this));
  }

  #registerCoachPhase(names) {
    try {
      Validator.checkCoachNames(names);
      this.#menuSelector = new MenuSelector(
        names.split(',').map((name) => {
          Validator.checkNameLength(name);
          return new Coach(name);
        })
      );
      this.#startReadingDislikePhase(this.#menuSelector.getCoachs());
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      this.#readCoachNamesPhase();
    }
  }

  #startReadingDislikePhase(coachs) {
    this.personNumber = 0;
    this.#readDislikeMenuPhase(coachs[0].getName());
  }

  #readDislikeMenuPhase(name) {
    InputView.readDislikeMenu(name, this.#validateDislikeMenuPhase.bind(this));
  }

  #validateDislikeMenuPhase(menu) {
    try {
      Validator.checkDislikeMenu(menu);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.#readDislikeMenuPhase(
        this.#menuSelector.getCoachs()[this.personNumber].getName()
      );
    }
    this.#registerDislikeMenuPhase(menu);
  }

  #registerDislikeMenuPhase(menu) {
    this.#tempDislikeMenu.push(menu);
    this.personNumber += 1;
    if (this.personNumber !== this.#menuSelector.getCoachs().length) {
      return this.#readDislikeMenuPhase(
        this.#menuSelector.getCoachs()[this.personNumber].getName()
      );
    }
    return this.#setDislikeMenuPhase();
  }

  #setDislikeMenuPhase() {
    this.#menuSelector
      .getCoachs()
      .forEach((coach, index) =>
        coach.setDislikeMenu(this.#tempDislikeMenu[index])
      );
    this.#selectMenuPhase();
  }

  #selectMenuPhase() {
    this.#menuSelector.decideAllCoachWeekMenu();
    this.#printResultPhase();
  }

  #printResultPhase() {
    OutputView.printResultTitle(this.#menuSelector.getWeekCategories());
    this.#menuSelector.getCoachs().forEach((coach) => {
      OutputView.printOneCoachMenu(coach.getName(), coach.getMenu());
    });
    OutputView.printEndMessage();
    OutputView.close();
  }
}

module.exports = MenuSelectorController;
