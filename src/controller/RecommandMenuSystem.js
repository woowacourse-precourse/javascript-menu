const { InputView } = require('../view/InputView');
const { OutputView } = require('../view/OutputView');
const { isCorrectInputHandler } = require('./isCorrectInputHandler');
const { Validation } = require('./Validation');

class RecommandMenuSystem {
  constructor(model) {
    this.recommandMenu = model;
  }

  start() {
    OutputView.printRecommandMenuStart();
    this.requestCoachName();
  }

  requestCoachName() {
    InputView.readCoachName(this.validateInputOfCoachName.bind(this));
  }

  validateInputOfCoachName(userInput) {
    if (!isCorrectInputHandler(Validation.ofCoachName, userInput)) {
      this.requestCoachName();
      return;
    }
  }
}

module.exports = RecommandMenuSystem;
