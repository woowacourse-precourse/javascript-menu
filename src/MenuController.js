const OutputView = require('./OutputView');

class MenuController {
  start() {
    OutputView.printIntro();
  }
}

module.exports = { MenuController };
