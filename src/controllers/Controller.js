const Coach = require('../models/Coach');
const Coachs = require('../models/Coachs');
const Categorys = require('../models/Categorys');
const { OutputView, InputView } = require('../views/IOView');

class Controller {
  #categorys = new Categorys();
  #coachs = new Coachs();
  #coachNames;

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
    const coach = this.#coachNames.shift();
    if (this.#coachNames.length > 0) return this.requestDislikeFoods();
  }
}

module.exports = Controller;
