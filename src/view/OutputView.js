const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/Message');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.process.startNotice);
  },

  printQuit() {
    Console.print(MESSAGE.process.quitNotice);
    Console.close();
  },

  printError(error) {
    Console.print(error.message);
  },
};

module.exports = OutputView;
