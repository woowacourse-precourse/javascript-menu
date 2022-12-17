const { readCoach, readExcludeFood } = require('../view/InputView');
const {
  printStart,
  printEnd,
  printRecommandTitle,
  printRecommand,
  printNewLine,
  printError,
} = require('../view/OutputView');
const {
  checkCoachNumber,
  checkExcludeFoodNumber,
  checkNameLength,
} = require('../utils/InputValidator');
const Coach = require('../model/Coach');
const recommandFood = require('../utils/FoodRecommandation');

class Presenter {
  #menuSample;

  #coaches = [];

  #count = 0;

  constructor(SAMPLE) {
    this.#menuSample = SAMPLE;
    printStart();
  }

  run() {
    readCoach((input) => {
      try {
        checkNameLength(input);
        checkCoachNumber(input);
        this.#storeCoach(input);
      } catch (error) {
        printError(error.message);
        this.run();
      }
    });
  }

  #storeCoach(input) {
    this.#coaches = input.split(',').reduce((acc, name) => {
      acc.push(new Coach(name));
      return acc;
    }, []);
    printNewLine();
    this.#checkExcludeFood();
  }

  #checkExcludeFood() {
    readExcludeFood((input) => {
      try {
        checkExcludeFoodNumber(input);
        this.#chooseExcludeFood(input);
      } catch (error) {
        printError(error.message);
        this.#checkExcludeFood(input);
      }
    }, this.#coaches[this.#count].getCoach().name);
  }

  #chooseExcludeFood(input) {
    printNewLine();
    const coach = this.#coaches[this.#count];
    coach.setExcludeFood(input);
    this.#count += 1;
    return this.#count === this.#coaches.length ? this.#result() : this.#checkExcludeFood();
  }

  #result() {
    printRecommandTitle();
    this.#coaches.forEach((coach) => {
      const { name, excludeFood } = coach.getCoach();
      const format = [name, ...recommandFood(excludeFood)];
      printRecommand(format.join(' | '));
    });
    printNewLine();
    printEnd();
  }
}

module.exports = Presenter;
