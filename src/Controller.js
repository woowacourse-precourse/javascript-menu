const { MESSAGE, SYMBOL } = require("./constants");
const NameValidator = require("./validation/NameValidator");
const InputView = require("./views/InputView");
const OutputView = require("./views/OutputView");

class Controller {
  start() {
    OutputView.printMessage(MESSAGE.START);
    this.askName();
  }

  askName() {
    InputView.readInput(MESSAGE.ASK_NAME, this.askNameCallback.bind(this));
  }

  askNameCallback(input) {
    let namesArr = input
      .split(SYMBOL.COMMA)
      .map((name) => name.replaceAll(" ", ""));
    try {
      new NameValidator(namesArr);
      console.log(namesArr);
    } catch (error) {
      OutputView.printMessage(error);
      this.askName();
    }
  }
}
module.exports = Controller;
