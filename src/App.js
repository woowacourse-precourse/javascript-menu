const CategorisMaker = require('./utils/CategorisMaker');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const MissionUtils = require('@woowacourse/mission-utils');
const Menu = require('./models/Menu');

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
    this.#names = input.split(',');
    InputView.readHates(this.#handleHates.bind(this), this.#names[this.#menus.length]);
  }

  #handleHates(input) {
    const hates = input.split(',');
    this.#menus.push(new Menu(this.#categoris, hates));
    if (this.#menus.length < this.#names.length) {
      InputView.readHates(this.#handleHates.bind(this), this.#names[this.#menus.length]);
    } else {
      this.#showMenus();
    }
  }

  #showMenus() {
    const foods = this.#menus.map((menu) => menu.choiceFood());
    OutputView.printMenus(this.#categoris, this.#names, foods);
    InputView.close();
  }
}

module.exports = App;
