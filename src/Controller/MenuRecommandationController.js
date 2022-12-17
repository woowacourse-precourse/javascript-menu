const OutputView = require('../View/OutputView');

const MenuRecommandationController = {
  run() {
    MenuRecommandationController.startService();
  },

  startService() {
    OutputView.printServiceStart();
  },
};

module.exports = MenuRecommandationController;
