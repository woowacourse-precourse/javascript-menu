const Coach = require('../model/Coach');
const { OutputView, InputView } = require('../views/View');

class Controller {
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
  }
}

module.exports = Controller;
