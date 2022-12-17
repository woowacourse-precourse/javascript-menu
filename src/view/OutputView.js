const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constant/Constant");

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printResult() {},
};

module.exports = OutputView;
