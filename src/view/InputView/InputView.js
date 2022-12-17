const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../constants/Constants');
const NamesValidation = require('../../utiles/NamesValidation');
const OutputView = require('../OutputView/OutputView');
const IInputView = require('./IInputView');

const InputView = class extends IInputView {
  #outputView;

  #namesValidation;

  constructor() {
    super();
    this.#outputView = new OutputView();
    this.#namesValidation = new NamesValidation();
  }

  readNames(saveNames) {
    Console.readLine(`${MESSAGE.getNames}\n`, (names) => {
      this.#readNamesHandler(names, saveNames);
    });
  }

  #readNamesHandler(names, saveNames) {
    try {
      this.#namesValidation.check(names);
      saveNames(names);
    } catch (error) {
      this.#outputView.printError(error.message);
      this.readNames(saveNames);
    }
  }

  readHateMenus() {
    throw new OverrideError();
  }
};

module.exports = InputView;
