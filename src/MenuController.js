const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Coach = require('./Coach');
const { categoryGenerate } = require('./CategoryRandomGenerator');
const { menuGenerate } = require('./MenuRandomGenerator');

class MenuController {
  #menus;
  #coachsName;
  #coachs;
  #categories;

  constructor(menus) {
    this.#menus = {};
    for (const menu in menus) {
      this.#menus[menu] = menus[menu].split(', ');
    }
    console.log(this.#menus);
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
      let category = categoryGenerate(Object.keys(this.#menus));
      while (this.#categories.filter((el) => category === el).length == 2) {
        category = categoryGenerate(Object.keys(this.#menus));
      }
      this.#categories.push(category);
    }
    return this.recommendMenu();
  }

  recommendMenu() {
    for (const category of this.#categories) {
      const menus = this.#menus[category];
      for (const coach of this.#coachs) {
        console.log(menuGenerate(menus));
      }
    }
  }
}

module.exports = MenuController;
