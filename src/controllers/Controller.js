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
    console.log(`입력한 코치들은 ${coachName}입니다.`);
  }
}

module.exports = Controller;
