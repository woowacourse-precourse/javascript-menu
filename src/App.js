const { Coach } = require('./models/Coach');
const { readCoaches } = require('./views/InputView');
const { OutputView } = require('./views/OutputView');

class App {
  #coaches = [];

  play() {
    OutputView.welcome();
    readCoaches(this.setCoaches.bind(this));
  }

  setCoaches(answer) {
    const coaches = answer.split(',');
    coaches.forEach((coach) => {
      this.#coaches.push(new Coach(coach));
    });
    console.log(this.#coaches.length);
  }
}

module.exports = App;
