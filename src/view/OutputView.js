const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../util/Constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartRecommend() {
    Console.print(OUTPUT_MESSAGE.START_TITLE);
  },

  printResult() {
    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
  },

  printDay() {
    Console.print(OUTPUT_MESSAGE.RESULT_DAY);
  },

  printEnd() {
    Console.print(OUTPUT_MESSAGE.END_TITLE);
  },
};

module.exports = OutputView;
