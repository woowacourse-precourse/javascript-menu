const { Console, Random } = require('@woowacourse/mission-utils');
const Category = require('../model/Category');
const Coach = require('../model/Coach');
const Menu = require('../model/Menu');
const { readCoachName, readInedibleMenu } = require('../view/InputView');
const { printStart, printResult } = require('../view/OutputView');

class Controller {
  #coach;

  #categories;

  start() {
    printStart();

    readCoachName(this.setCoachName.bind(this));
  }

  setCoachName(input) {
    this.#coach = new Coach();
    const coaches = this.#coach.setNames(input);
    this.startReadingInedibleMenu(coaches.map(({ name }) => name));
  }

  startReadingInedibleMenu(names) {
    const index = 0;
    const coachName = names[index];

    readInedibleMenu(this.setInedibleMenu.bind(this, names, index), coachName);
  }

  setInedibleMenu(names, index, input) {
    let coachName = names[index];
    this.#coach.setInedibleMenu(input, coachName);

    if (index < names.length - 1) {
      coachName = names[index + 1];
      readInedibleMenu(this.setInedibleMenu.bind(this, names, index + 1), coachName);
      return;
    }

    this.recommend();
  }

  recommend() {
    this.recommendCategory();
    const recommendedResult = this.recommendMenu();

    this.showResult(recommendedResult);
  }

  recommendCategory() {
    this.#categories = new Category().recommendAllDays(Random.pickNumberInRange);
  }

  recommendMenu() {
    let recommendedResult;

    this.#categories.forEach((category) => {
      recommendedResult = this.#coach.decideMenu(Menu.recommend, category, Random.shuffle);
    });

    return recommendedResult;
  }

  showResult(recommendedResult) {
    printResult(this.#categories, recommendedResult);

    Controller.quit();
  }

  static quit() {
    Console.close();
  }
}

module.exports = Controller;
