const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/constants');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },
};

module.exports = OutputView;
