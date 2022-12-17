const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../constants/Constants');
const HateMenusValidation = require('../../utiles/HateMenusValidation');
const NamesValidation = require('../../utiles/NamesValidation');
const OutputView = require('../OutputView/OutputView');
const IInputView = require('./IInputView');

const InputView = class extends IInputView {
  #outputView;

  #namesValidation;

  #hateMenusValidation;

  constructor() {
    super();
    this.#outputView = new OutputView();
    this.#namesValidation = new NamesValidation();
    this.#hateMenusValidation = new HateMenusValidation();
  }

  readNames(saveNames) {
    Console.readLine(`${MESSAGE.getNames}\n`, (names) => {
      const namesArr = names.split(',');
      this.#readNamesHandler(namesArr, saveNames);
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

  readHateMenus(name, saveHateMenus) {
    Console.readLine(`${MESSAGE.cantEat(name)}\n`, (hateMenus) => {
      const hateMenusArr = hateMenus.split(',');
      this.readHateMenusHandler(name, hateMenusArr, saveHateMenus);
    });
  }

  readHateMenusHandler(name, hateMenus, saveHateMenus) {
    try {
      this.#hateMenusValidation.check(hateMenus);
      saveHateMenus(hateMenus);
    } catch (error) {
      this.#outputView.printError(error.message);
      this.readHateMenus(name, saveHateMenus);
    }
  }
};

module.exports = InputView;
