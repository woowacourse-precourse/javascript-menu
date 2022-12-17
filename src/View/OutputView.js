const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/message");

const OutputView = {
  printServiceStart() {
    Console.print(OUTPUT_MESSAGE.serviceStart);
  },
};

module.exports = OutputView;
