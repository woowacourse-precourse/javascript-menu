const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/index");

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printStartMessage() {
    this.print(MESSAGE.START_RECOMMENDATION);
  },
};

module.exports = OutputView;
