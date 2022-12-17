const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Recommendor = require('../model/Recommendor');
const Validation = require('../utils/Validation');
const { MESSAGE } = require('../utils/constants');

class Controller {
  #index = 0;

  constructor(SAMPLE) {
    this.sample = SAMPLE;
    this.recommendor = new Recommendor();
  }

  init() {
    OutputView.printMessage(MESSAGE.serviceStart);

    this.inputCoaches();
  }

  inputCoaches() {
    InputView.readCoaches(this.validateCoaches.bind(this));
  }

  validateCoaches(coaches) {
    try {
      Validation.checkBlank(coaches);
      Validation.checkStringType(coaches);
      Validation.checkValidLengthOfCoaches(coaches);
    } catch (error) {
      OutputView.printMessage(error);
      return this.inputCoaches();
    }

    this.makeLunchTeams(coaches);
  }

  makeLunchTeams(coaches) {
    coaches = coaches.split(',');
    this.recommendor.setCoaches(coaches);

    this.inputHateMenu();
  }

  inputHateMenu() {
    let coachNames = this.recommendor.getCoaches();
    if (this.#index === coachNames.length) {
      return this.recommendMenus();
    }
    InputView.readHateMenu(
      coachNames[this.#index],
      this.validateMenus.bind(this)
    );
  }

  validateMenus(menus) {
    try {
      Validation.checkStringType(menus);
      Validation.checkValidLengthOfMenus(menus);
      Validation.checkValidMenu(menus, this.sample);
    } catch (error) {
      OutputView.printMessage(error);
      return this.inputHateMenu();
    }

    this.recommendor.setHateMenuLists(menus.split(','));
    this.#index += 1;

    this.inputHateMenu();
  }

  recommendMenus() {
    this.recommendor.setCategories();
    this.recommendor.setAllMenus(this.sample);

    this.recommendor.recommendMenus();
  }
}

module.exports = Controller;
