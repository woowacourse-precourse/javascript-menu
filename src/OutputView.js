const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./modules/Constants');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },
};

module.exports = OutputView;
