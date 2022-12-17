const InputView = require('./InputView');
const OutputView = require('./OutputView');

class MenuController {
  #machine;

  #order = 0;

  constructor({ machine }) {
    this.#machine = machine;
  }

  start() {
    OutputView.printIntro();

    this.setCoaches();
  }

  setCoaches() {
    InputView.readCoachNames((names) => {
      this.#machine.setCoachesMap(names);

      this.setHateFood();
    });
  }

  setHateFood() {
    const coaches = this.#machine.getCoaches();
    const name = coaches[this.#order];

    InputView.readHateFood(name, (foodList) => {
      console.log(foodList);

      if (this.#order === coaches.length - 1) {
        this.recommendMenu();
        return;
      }

      this.countOrder();
      this.setHateFood();
    });
  }

  recommendMenu() {}

  countOrder() {
    this.#order += 1;
  }
}

module.exports = { MenuController };
