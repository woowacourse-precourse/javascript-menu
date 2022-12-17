const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Recommendor = require('../model/Recommendor');
const Validation = require('../utils/Validation');
const { MESSAGE } = require('../utils/constants');

class Controller {
  constructor() {
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
  }
}

module.exports = Controller;
