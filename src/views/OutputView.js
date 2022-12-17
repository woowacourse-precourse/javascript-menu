const { Console } = require("@woowacourse/mission-utils");
const { MSG } = require("../constants/constants");

const OutputView = {
  printInit() {
    Console.print(MSG.INIT);
  },
  printResult(categories, result) {
    Console.print(categories, result);
    Console.close();
  },
};

module.exports = OutputView;
