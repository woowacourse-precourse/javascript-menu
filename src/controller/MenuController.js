const OutputView = require('../views/OutputView');

class MenuController {
  startRecommend() {
    OutputView.printStartRecommend();
  }
}

module.exports = MenuController;
