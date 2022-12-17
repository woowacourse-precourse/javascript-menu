const { Console } = require('@woowacourse/mission-utils');
const { SERVICE_MESSAGE } = require('../utils/gameMessage');

const OutputView = {
  printServiceStart() {
    Console.print(SERVICE_MESSAGE.SERVICE_START);
  },
};

module.exports = OutputView;
