const { MESSAGE, SYMBOL } = require("./constants");
const InputView = require("./views/InputView");
const OutputView = require("./views/OutputView");

class Controller {
  start() {
    OutputView.printMessage(MESSAGE.START);
    this.askName();
  }

  askName() {
    const callback = (input) => {
      // 유효성검사
      const namesArr = input.split(SYMBOL.COMMA);
      console.log(namesArr);
    };

    InputView.readInput(MESSAGE.ASK_NAME, callback);
  }
}
module.exports = Controller;
