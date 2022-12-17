const MissionUtils = require('@woowacourse/mission-utils');

class OutputView {
  meneController;

  constructor(meneController) {
    this.meneController = meneController;
  }
  initialMessage(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = OutputView;
