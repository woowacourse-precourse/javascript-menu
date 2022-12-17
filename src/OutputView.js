const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MSG } = require('./Constant');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MSG.START);
  },
  printResult(cat) {
    Console.print(OUTPUT_MSG.RESULT);
    Console.print(OUTPUT_MSG.DAY);
    Console.print(OUTPUT_MSG.CATEGORY(cat));
    Console.print(OUTPUT_MSG.FINISH);
    Console.close();
  },
};

module.exports = OutputView;
