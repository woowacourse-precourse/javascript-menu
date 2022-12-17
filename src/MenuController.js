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

  makeCoach(coachName, foods) {
    const hateMenu = foods.split(',');
    Validation.checkHateMenu(hateMenu);
    this.#coachs.push(new Coach(coachName, hateMenu));
  }

  getRandomCategory() {
    const menuKeys = Object.keys(this.#menus);

    for (let i = 0; i < 5; i++) {
      let category = categoryGenerate(menuKeys);
      console.log(category);
      while (this.#categories.filter((el) => category === el).length == 2) {
        category = categoryGenerate(menuKeys);
      }
      this.#categories.push(category);
    }
    console.log(this.#categories);
    return this.recommendMenu();
  }

  recommendCoachMenu(menuList) {
    for (const coach of this.#coachs) {
      console.log(coach.name);
      let menu = menuGenerate(menuList);
      while (!coach.checkMenu(menu)) {
        menu = menuGenerate(menuList);
      }
      coach.recommendedMenu.push(menu);
    }
  }

  recommendMenu() {
    for (const category of this.#categories) {
      const menuList = this.#menus[category];
      this.recommendCoachMenu(menuList);
    }
    OutputView.printEndMessage(this.#categories, this.#coachs);
  }
}

module.exports = MenuController;
