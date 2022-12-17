const Coach = require('./models/Coach');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const CategorisMaker = require('./utils/CategorisMaker');
const Validator = require('./utils/Validator');

class App {
  #categoris;
  #names;
  #coachs;

  play() {
    OutputView.printStart();
    this.#categoris = CategorisMaker.make();
    this.#names = [];
    this.#coachs = [];
    InputView.readNames(this.#handleNames.bind(this));
  }

  #handleNames(input) {
    try {
      Validator.checkNames(input);
      this.#names = input.split(',');
      InputView.readHates(this.#handleHates.bind(this), this.#names[this.#coachs.length]);
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
      InputView.readHates(this.#handleHates.bind(this), this.#names[this.#coachs.length]);
    }
  }

  #controllHates(hates) {
    this.#coachs.push(new Coach(hates));
    if (this.#coachs.length < this.#names.length) {
      InputView.readHates(this.#handleHates.bind(this), this.#names[this.#coachs.length]);
    } else {
      this.#showMenus();
    }
  }

  #showMenus() {
    const foodsList = this.#coachs.map((coach) => coach.choiceFoods(this.#categoris));
    OutputView.printMenus(this.#categoris, this.#names, foodsList);
    InputView.close();
  }
}

module.exports = App;
