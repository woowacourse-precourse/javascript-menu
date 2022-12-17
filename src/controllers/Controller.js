const Coach = require('../model/Coach');
const Coachs = require('../model/Coachs');
const Categorys = require('../model/Categorys');
const { OutputView, InputView } = require('../views/View');

class Controller {
  #categorys = new Categorys();
  #coachs = new Coachs();
  #coachNames;
  constructor(categorys) {
    this.#categorys.addGategorys(categorys);
  }

  start() {
    OutputView.printRecommendStart();
    this.getCoachNames();
  }

  getCoachNames() {
    InputView.readCoachNames((coachName) => this.handleCoachNames(coachName));
  }

  handleCoachNames(coachName) {
    const isValid = Coach.validationCoachNames(coachName);
    if (!isValid) return this.getCoachNames();
    this.createCoach(coachName);
    this.#coachNames = this.#coachs.getCoachsName();
    this.requestDislikeFoods();
  }

  createCoach(coachNames) {
    coachNames.split(',').forEach((coachName) => this.#coachs.addCoach(coachName));
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

    const coach = this.#coachNames.shift();
    if (this.#coachNames.length > 0) return this.requestDislikeFoods();
  }
}

module.exports = Controller;
