const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../constants/Constants');

const OutputView = class extends IOutputView {
  printError(message) {
    Console.print(message);
  }

  printOpening() {
    Console.print(MESSAGE.opening);
  }

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
