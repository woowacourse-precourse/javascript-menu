const Category = require('../Model/Category');
const Coach = require('../Model/Coach');
const MenuPicker = require('../Model/MenuPicker');
const Validate = require('../Model/Validate');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

class MenuController {
  #samples;

  constructor(samples) {
    this.#samples = samples;
  }

  start() {
    OutputView.start();
    this.readCoaches();
  }

  readCoaches() {
    InputView.readCoachNames(this.validateCoach.bind(this));
  }

  validateCoach(names) {
    try {
      Validate.names(names);
      this.createCoach(names);
    } catch ({ message }) {
      OutputView.print(message);
      this.readCoaches();
    }
  }

  createCoach(names) {
    Coach.create(names);
    this.getCurrentCoachName();
  }

  getCurrentCoachName() {
    const coachName = Coach.getName();
    this.readNoMenu(coachName);
  }

  readNoMenu(coachName) {
    InputView.readNoMenu(coachName, this.validateMenu.bind(this));
  }

  validateMenu(menus) {
    try {
      Validate.noMenu(menus);
      Coach.addNoFood(menus);
    } catch ({ message }) {
      OutputView.print(message);
      this.getCoach();
    }
    this.checkAllInput();
  }

  checkAllInput() {
    const inputCount = Coach.getInputCount();
    const coachCount = Coach.getCoachCount();

    if (inputCount === coachCount) {
      this.generateCategory();
    } else {
      this.getCurrentCoachName();
    }
  }

  generateCategory() {
    Category.generate();
    this.tarverseCoach();
  }

  tarverseCoach() {
    for (const [coachName, noMenu] of Coach.people()) {
      this.recommendMenu(coachName, noMenu);
    }
    this.showResult();
  }

  recommendMenu(coachName, noMenu) {
    const category = Category.getCategory();
    const recommendMenu = MenuPicker.recommend(noMenu, category, this.#samples);
    Coach.assignMenu(coachName, recommendMenu);
  }

  showResult() {
    const coaches = Coach.toString();
    const category = Category.toString();
    OutputView.printResult(coaches, category);
  }
}

module.exports = MenuController;
