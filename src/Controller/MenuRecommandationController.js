const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

const MenuRecommandationController = {
  run() {
    MenuRecommandationController.startService();
  },

  startService() {
    OutputView.printServiceStart();

    MenuRecommandationController.readCoachNames();
  },

  readCoachNames() {
    InputView.readCoachNames((coachNames) => {});
  },
};

module.exports = MenuRecommandationController;
