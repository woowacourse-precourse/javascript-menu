const InputView = require('./InputView');
const OutputView = require('./OutputView');

class MenuController {
  crews;

  constructor() {
    this.outputView = new OutputView(this);
    this.inputView = new InputView(this);
  }

  start() {
    this.outputView.initialMessage('이니샬');
    this.inputView.readCrewNames();
  }
}

module.exports = MenuController;
