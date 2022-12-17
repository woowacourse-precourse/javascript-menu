const { OutputView, InputView } = require('../views/IOView');

class Controller {
  start() {
    OutputView.printStart();
    this.requestCoachNames();
  }

  requestCoachNames() {
    InputView.readCoachNames((coachName) => this.handleCoachNames(coachName));
  }

  handleCoachNames(coachName) {
    console.log(`추천받을 코치들은 ${coachName}입니다.`);
  }
}

module.exports = Controller;
