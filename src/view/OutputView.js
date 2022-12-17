const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printError(error) {
    this.print(error);
  },
};

module.exports = OutputView;
