const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Coach = require('./Coach');
const { generate } = require('./CategoryRandomGenerator');

class MenuController {
  #menus;
  #coachsName;
  #coachs;
  #categories;

  constructor(menus) {
    this.#menus = menus;
    this.#coachs = [];
    this.#categories = [];
  }

  startRecommend() {
    OutputView.printStartMessage();
    InputView.readCoachsName(this.getCoachsName.bind(this));
  }

  getCoachsName(coachsName) {
    this.#coachsName = coachsName.split(',');
    return this.readCoachsHateMenu();
  }

  readCoachsHateMenu() {
    const coachIndex = 0;
    InputView.readHateMenu(
      this.makeCoach.bind(this),
      this.getRandomCategory.bind(this),
      coachIndex,
      this.#coachsName
    );
  }

  makeCoach(coachName, hateMenu) {
    this.#coachs.push(new Coach(coachName, hateMenu.split(',')));
  }

  getRandomCategory() {
    for (let i = 0; i < 5; i++) {
      let category = generate(Object.keys(this.#menus));
      while (this.#categories.filter((el) => category === el).length == 2) {
        category = generate(Object.keys(this.#menus));
      }
      this.#categories.push(category);
    }
  }
}

module.exports = MenuController;
