const { Coach } = require('./models/Coach');
const { readCoaches, readBannedFoods } = require('./views/InputView');
const { OutputView } = require('./views/OutputView');

class App {
  #coaches = [];

  play() {
    OutputView.welcome();
    readCoaches(this.setCoaches.bind(this));
  }

  // eslint-disable-next-line max-lines-per-function
  setCoaches(answer) {
    const coaches = answer.split(',');
    coaches.forEach((coach) => {
      this.#coaches.push(new Coach(coach));
    });
    readBannedFoods(
      this.setCoachesBannedFoods.bind(this),
      this.#coaches.map((c) => c.getName()),
      0,
      [],
    );
    // console.log(`bannedFoods are ${JSON.stringify(bannedFoods)}`);
  }

  setCoachesBannedFoods(arr) {
    console.log(JSON.stringify(arr));
  }
}

module.exports = App;
