const InputView = require('./InputView');
const OutputView = require('./OutputView');

class MenuController {
  #machine;

  constructor({ machine }) {
    this.#machine = machine;
  }

  start() {
    OutputView.printIntro();

    this.setCoaches();
  }

  setCoaches() {
    InputView.readCoachNames((names) => {
      console.log(names);
    });
  }
}

module.exports = { MenuController };
