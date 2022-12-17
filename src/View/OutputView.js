const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constants');

const OutputView = {
  startMessage() {
    Console.print(MESSAGE.startMessage);
  },

  printError(error) {
    Console.print(error);
  },

};

module.exports = OutputView;
