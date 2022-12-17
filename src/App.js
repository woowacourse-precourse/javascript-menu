const { readCoaches } = require('./views/InputView');

class App {
  #coaches = [];

  play() {
    readCoaches(this.setCoaches.bind(this));
  }

  setCoaches(answer) {
    this.#coaches = answer.split(',');
    console.log(this.#coaches);
  }
}

module.exports = App;
