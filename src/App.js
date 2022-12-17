const { Coach } = require('./models/Coach');
const { findIndexByCoachName } = require('./utils/common');
const { readCoaches, readBannedFoods } = require('./views/InputView');
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
    readBannedFoods(
      this.setCoachesBannedFoods.bind(this),
      this.#coaches.map((c) => c.getName()),
      0,
      [],
    );
  }

  setCoachesBannedFoods(arr) {
    arr.forEach((el) => {
      this.#coaches[findIndexByCoachName(this.#coaches, el.name)].setBannedFoods(el.foods);
    });
    this.#coaches.map((c) => console.log(c.getBannedFoods()));
  }
}

module.exports = App;
