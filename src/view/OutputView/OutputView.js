const { Console } = require('@woowacourse/mission-utils');

const OutputView = class extends IOutputView {
  printError(message) {
    Console.print(message);
  }

  // printOpening() {
  //   throw new OverrideError();
  // }

  // printRecommendMenu() {
  //   throw new OverrideError();
  // }

  // printClosing() {
  //   throw new OverrideError();
  // }

  close() {
    Console.close();
  }
};

module.exports = OutputView;
