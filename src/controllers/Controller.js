const Coach = require('../models/Coach');
const Coachs = require('../models/Coachs');
const Categorys = require('../models/Categorys');
const { OutputView, InputView } = require('../views/IOView');
const { generator } = require('../libs/GeneratorCategoryNumber');

class Controller {
  #categorys = new Categorys();
  #coachs = new Coachs();
  #coachNames;
  #recommendedCount = 0;

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
    if (this.#recommendedCount === 5) return this.printRecommendedMenu();
    this.#recommendedCount += 1;
    const categoryNumber = generator();
    const categoryMenus = this.#categorys.getCategoryMenus(categoryNumber);
    this.#coachs.decideMenu(categoryMenus);
    return this.setRecommendedMenu();
  }

  printRecommendedMenu() {}
}

module.exports = Controller;
