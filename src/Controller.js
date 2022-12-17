const { MESSAGE } = require("./constants");
const OutputView = require("./views/OutputView");

class Controller {
  start() {
    OutputView.printMessage(MESSAGE.START);
  }
}
module.exports = Controller;
