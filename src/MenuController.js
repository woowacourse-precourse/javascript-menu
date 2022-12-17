const InputView = require('./InputView');
const OutputView = require('./OutputView');

class MenuController {
  startRecommend() {
    OutputView.printStartMessage();
    InputView.readCoachsName(this.makeCoachs.bind(this));
  }

  makeCoachs(coachs) {
    const coachsName = coachs.split(',');
    console.log(coachsName);
  }
}

module.exports = MenuController;
