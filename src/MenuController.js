const MissionUtils = require('@woowacourse/mission-utils');
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
      this.#machine.setHateFood(name, foodList);

      if (this.#order === coaches.length - 1) {
        this.recommend();
        return;
      }

      this.countOrder();
      this.setHateFood();
    });
  }

  recommend() {
    const result = this.#machine.getResult();
    OutputView.printResult(result);
    this.quit();
  }

  countOrder() {
    this.#order += 1;
  }

  quit() {
    MissionUtils.Console.close();
  }
}

module.exports = { MenuController };
