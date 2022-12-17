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
    const callback = (input) => {
      const namesArr = input.split(SYMBOL.COMMA);
      new NameValidator(namesArr);
      console.log(namesArr);
    };

    InputView.readInput(MESSAGE.ASK_NAME, callback);
  }
}
module.exports = Controller;
