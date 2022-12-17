const { Console } = require("@woowacourse/mission-utils");
const { MSG } = require("../constants/constants");

const OutputView = {
  printInit() {
    Console.print(MSG.INIT);
  },
};

module.exports = OutputView;
