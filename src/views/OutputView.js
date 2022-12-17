const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants');

const OutputView = {
  printEmptyLine() {
    Console.print('');
  },

  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },

  printResult() {
    Console.print(OUTPUT_MESSAGE.RESULT);
  },

  printFinish() {
    Console.print(OUTPUT_MESSAGE.FINISH);
  },
};

module.exports = OutputView;
