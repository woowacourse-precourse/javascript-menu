const InputView = require("./UI/InputView");
const OutputView = require("./UI/OutView");

class Controller {
  start() {
    OutputView.printStartMessage();
    InputView.readCoachName();
  }
}

module.exports = Controller;
