const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MSG } = require('./Constant');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MSG.START);
  },
};

module.exports = OutputView;
