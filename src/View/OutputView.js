const { Console } = require('@woowacourse/mission-utils');
// const { MESSAGE } = require('../Utils/Constants');

const OutputView = {
  printError(error) {
    Console.print(error);
  },

};

module.exports = OutputView;
