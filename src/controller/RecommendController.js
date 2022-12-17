const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Validator = require('../utils/Validator');

class RecommendController {
  constructor() {
    OutputView.printStart();
  }

  inputCoachName() {
    InputView.inputCoachName((names) => {
      Validator.handleException(
        () => Validator.coachValidate(names),
        () => {},
        () => this.inputCoachName(),
      );
    });
  }
}

module.exports = RecommendController;
