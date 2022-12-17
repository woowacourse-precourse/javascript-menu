const { printStart } = require('../views/OutputView');

class MenuController {
  startService() {
    printStart();
  }
}

module.exports = MenuController;
