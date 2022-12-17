const Coach = require('../models/Coach');
const { OutputView, InputView } = require('../views/IOView');

class Controller {
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
  }
}

module.exports = Controller;
