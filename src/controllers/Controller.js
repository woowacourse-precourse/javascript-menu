const Coach = require('../model/Coach');
const Coachs = require('../model/Coachs');
const { OutputView, InputView } = require('../views/View');

class Controller {
  #coachs = new Coachs();
  #coachNames;

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
    const coach = this.#coachNames.shift();

    if (this.#coachNames.length > 0) return this.requestDislikeFoods();
  }
}

module.exports = Controller;
