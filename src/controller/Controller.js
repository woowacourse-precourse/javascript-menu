const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const { Console } = require("@woowacourse/mission-utils");
const Validator = require("../Validator");

class Controller {
  init() {
    OutputView.printInit();
    this.inputCoachesHandler();
  }

  inputCoachesHandler() {
    InputView.readCoaches(this.coachesHandler.bind(this));
  }

  coachesHandler(coaches) {
    try {
      Validator.validateCoach(coaches.split(","));
    } catch (error) {
      Console.print(error);
    }
  }
}

module.exports = Controller;
