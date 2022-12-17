const { Console } = require('@woowacourse/mission-utils');
const { SERVICE_MESSAGE, PRINT_FRAME } = require('../utils/gameMessage');

const OutputView = {
  printServiceStart() {
    Console.print(SERVICE_MESSAGE.SERVICE_START);
  },

  printRecommand(categoryArr) {
    Console.print(SERVICE_MESSAGE.SERVICE_RESULT);
    Console.print(PRINT_FRAME.WEEK);
    this.printMapFrame('카테고리'+ categoryArr);
    Console.print(SERVICE_MESSAGE.SERVICE_END);
    Console.close();
  },

  printMapFrame(arr) {
    Console.print(
      PRINT_FRAME.BEGIN + arr.join(PRINT_FRAME.DIVIDER) + PRINT_FRAME.END
    );
  },
};

module.exports = OutputView;
