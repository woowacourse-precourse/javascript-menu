const { OutputView } = require('../views/IOView');

class Controller {
  start() {
    OutputView.printStart();
  }
}

module.exports = Controller;
