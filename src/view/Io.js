const InputView = require('./InputView/InputView');
const OutputView = require('./OutputView/OutputView');

const Io = class {
  #inputView;

  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  readNames(saveNames) {
    this.#inputView.readNames(saveNames);
  }

  readHateMenus(name, saveNames) {
    this.#inputView.readHateMenus(name, saveNames);
  }

  printOpening() {
    this.#outputView.printOpening();
  }

  printRecommendMenu() {
    this.#outputView.printRecommendMenu();
  }

  printClosing() {
    throw new OverrideError();
  }

  close() {
    throw new OverrideError();
  }
};

module.exports = Io;
