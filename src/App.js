const { readCoaches } = require('./views/InputView');
const { OutputView } = require('./views/OutputView');

class App {
  #coaches = [];

  play() {
    OutputView.welcome();
    readCoaches(this.setCoaches.bind(this));
  }

  setCoaches(answer) {
    this.#coaches = answer.split(',');
    console.log(this.#coaches);
  }
}

module.exports = App;
