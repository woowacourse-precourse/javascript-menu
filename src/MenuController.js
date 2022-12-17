const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Coach = require('./Coach');
const { categoryGenerate } = require('./CategoryRandomGenerator');
const { menuGenerate } = require('./MenuRandomGenerator');
const Validation = require('./Validation');

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
    this.#coachs = [];
    this.#categories = [];
  }

  startRecommendService() {
    OutputView.printStartMessage();
    InputView.readCoachsName(this.getCoachsName.bind(this));
  }

  getCoachsName(coachsName) {
    this.#coachsName = coachsName.split(',');
    Validation.checkCoachs(this.#coachsName);
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

  makeCoach(coachName, menus) {
    const hateMenu = menus.split(',');
    Validation.checkHateMenu(hateMenu);
    this.#coachs.push(new Coach(coachName, hateMenu));
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

  recommendCoachMenu(menus) {
    for (const coach of this.#coachs) {
      let menu = menuGenerate(menus);
      while (!coach.checkMenu(menu)) {
        menu = menuGenerate(menus);
      }
      coach.recommendedMenu.push(menu);
    }
  }

  recommendMenu() {
    for (const category of this.#categories) {
      const menus = this.#menus[category];
      this.recommendCoachMenu(menus);
    }
    OutputView.printEndMessage(this.#categories, this.#coachs);
  }
}

module.exports = MenuController;
