const Coach = require('../models/Coach');
const Coachs = require('../models/Coachs');
const { OutputView, InputView } = require('../views/IOView');

class Controller {
  #coachs = new Coachs();

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
  }

  createCoach(coachNames) {
    coachNames
      .split(',')
      .forEach((coachName) => this.#coachs.addCoach(coachName));
  }
}

module.exports = Controller;
