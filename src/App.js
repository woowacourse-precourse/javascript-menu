const Coach = require('./models/Coach');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const Validator = require('./utils/Validator');
const makeCategoris = require('./utils/makeCategoris');

class App {
  #categoris;
  #names;
  #coachs;

  play() {
    this.#categoris = makeCategoris();
    this.#names = [];
    this.#coachs = [];

    OutputView.printStart();
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
      this.#initCoach(hates);
    } catch (e) {
      OutputView.printError(e);
      InputView.readHates(this.#handleHates.bind(this), this.#names[this.#coachs.length]);
    }
  }

  #initCoach(hates) {
    this.#coachs.push(new Coach(hates));
    if (this.#coachs.length < this.#names.length) {
      InputView.readHates(this.#handleHates.bind(this), this.#names[this.#coachs.length]);
    } else {
      this.#showFoods();
    }
  }

  #showFoods() {
    const foodsList = this.#coachs.map((coach) => coach.choiceFoods(this.#categoris));
    OutputView.printFoods(this.#categoris, this.#names, foodsList);
    InputView.close();
  }
}

module.exports = App;
