const InputView = require('./InputView/InputView');
const OutputView = require('./OutputView/OutputView');

const Io = class {
  #inputView;

  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  readNames() {
    throw new OverrideError();
  }

  readHateMenus() {
    throw new OverrideError();
  }

  printOpening() {
    this.#outputView.printOpening();
  }

  printRecommendMenu() {
    throw new OverrideError();
  }

  printClosing() {
    throw new OverrideError();
  }

  close() {
    throw new OverrideError();
  }
};

module.exports = Io;
