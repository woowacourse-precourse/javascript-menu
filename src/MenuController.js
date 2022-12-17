const OutputView = require('./OutputView');

class MenuController {
  startRecommend() {
    OutputView.printStartMessage();
  }
}

module.exports = MenuController;
