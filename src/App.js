const CategorisMaker = require('./utils/CategorisMaker');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const MissionUtils = require('@woowacourse/mission-utils');
const Menu = require('./models/Menu');
const Validator = require('./utils/Validator');

class App {
  #categoris;
  #names;
  #menus;

  play() {
    OutputView.printStart();
    this.#categoris = CategorisMaker.make();
    this.#names = [];
    this.#menus = [];
    InputView.readNames(this.#handleNames.bind(this));
  }

  #handleNames(input) {
    try {
      Validator.checkNames(input);
      this.#names = input.split(',');
      InputView.readHates(this.#handleHates.bind(this), this.#names[this.#menus.length]);
    } catch (e) {
      OutputView.printError(e);
      InputView.readNames(this.#handleNames.bind(this));
    }
  }

  #handleHates(input) {
    try {
      Validator.checkHates(input);
      const hates = input.split(',');
      this.#controllHates(hates);
    } catch (e) {
      OutputView.printError(e);
      InputView.readHates(this.#handleHates.bind(this), this.#names[this.#menus.length]);
    }
  }

  #controllHates(hates) {
    this.#menus.push(new Menu(hates));
    if (this.#menus.length < this.#names.length) {
      InputView.readHates(this.#handleHates.bind(this), this.#names[this.#menus.length]);
    } else {
      this.#showMenus();
    }
  }

  #showMenus() {
    const foods = this.#menus.map((menu) => menu.choiceFood(this.#categoris));
    OutputView.printMenus(this.#categoris, this.#names, foods);
    InputView.close();
  }
}

module.exports = App;
