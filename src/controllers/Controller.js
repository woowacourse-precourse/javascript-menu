const Coach = require('../models/Coach');
const Coachs = require('../models/Coachs');
const Categorys = require('../models/Categorys');
const { OutputView, InputView, quit } = require('../views/IOView');
const { generator } = require('../libs/GeneratorCategoryNumber');

class Controller {
  #categorys = new Categorys();
  #coachs = new Coachs();
  #coachNames;
  #recommendedCategory = [];

  constructor(categorys) {
    this.#categorys.addGategorys(categorys);
  }

  start() {
    OutputView.printStart();
    this.requestCoachNames();
  }

  requestCoachNames() {
    InputView.readCoachNames((coachNames) => this.handleCoachNames(coachNames));
  }

  handleCoachNames(coachNames) {
    const isValid = Coach.validationCoachNames(coachNames);
    if (!isValid) return this.requestCoachNames();
    this.createCoach(coachNames);
    this.#coachNames = this.#coachs.getCoachsName();
    this.requestDislikeFoods();
  }

  createCoach(coachNames) {
    coachNames
      .split(',')
      .forEach((coachName) => this.#coachs.addCoach(coachName));
  }

  requestDislikeFoods() {
    InputView.readDislikeFood(this.#coachNames[0], (dislikeFoods) =>
      this.handleDislikeFoods(dislikeFoods)
    );
  }

  handleDislikeFoods(dislikeFoods) {
    const isValid = Coach.validationDislikeFoods(
      dislikeFoods,
      this.#categorys.isExistMenu(dislikeFoods)
    );
    if (!isValid) return this.requestDislikeFoods();

    this.addDislikeFoods(dislikeFoods);
    if (this.#coachNames.length > 0) return this.requestDislikeFoods();
    this.setRecommendedMenu();
  }

  addDislikeFoods(dislikeFoods) {
    const coachName = this.#coachNames.shift();
    this.#coachs.addDislikeFoods(coachName, dislikeFoods);
  }

  setRecommendedMenu() {
    if (this.#recommendedCategory.length === 5) return this.decideMenu();

    const categoryNumber = generator();
    if (
      this.#recommendedCategory.filter((number) => number === categoryNumber)
        .length === 2
    )
      return this.setRecommendedMenu();

    this.#recommendedCategory.push(categoryNumber);

    return this.setRecommendedMenu();
  }

  decideMenu() {
    const categoryMenus = this.#categorys.getCategoryMenus(
      this.#recommendedCategory
    );
    this.#coachs.decideMenu(categoryMenus);

    this.printRecommendedMenu();
  }

  printRecommendedMenu() {
    OutputView.printRecommendedMenu(
      this.#coachs.getCoachsRecommendedMenu(),
      this.#recommendedCategory
    );
    this.quitApp();
  }

  quitApp() {
    quit();
  }
}

module.exports = Controller;
