const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  module: Console,
  print(message) {
    this.module.print(message);
  },
  printResult(menuRecords) {},
};

module.exports = OutputView;
