const CategoryMaker = require('../model/CategoryMaker');
const validator = require('../utils/InputValidator');
const { generate } = require('../utils/RandomNumGenerator');
const InputView = require('../view/inputView');
const OutputView = require('../view/OutputView');

class Controller {
  #coachNames;
  #hateMenus;
  #count;

  constructor() {
    this.#coachNames;
    this.#hateMenus;
    this.#count = 0;
  }
  start() {
    OutputView.printServiceStart();
    this.inputCoachName();
  }

  inputCoachName() {
    InputView.readCoachName(this.getCoachName.bind(this));
  }

  getCoachName(names) {
    try {
      this.#coachNames = names.split(',');
      validator.coachValidate(this.#coachNames);
      this.inputHateMenu();
    } catch {
      this.inputCoachName();
    }
  }

  inputHateMenu() {
    InputView.readHateMenu(
      this.getHateMenu.bind(this),
      this.#coachNames,
      this.#count
    );
  }

  getHateMenu(menus) {
    try {
      this.#count += 1;
      let coachNum = this.#coachNames.length;
      this.#hateMenus = menus.split(',');
      validator.hateMenuValidate(this.#hateMenus, this.#coachNames);
      this.checkCoachNum(coachNum);
    } catch {
      this.inputHateMenu();
    }
  }

  checkCoachNum(coachNum) {
    if (this.#count < coachNum) {
      this.inputHateMenu();
    }
    if (this.#count === coachNum) this.getCategory();
  }

  getCategory() {
    const categoryArr = CategoryMaker.makeCategory(generate);
    // console.log(categoryArr);
    OutputView.printRecommand(categoryArr);
  }
}

module.exports = Controller;
