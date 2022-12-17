const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./view.constants");

/**
 * 사용자에게 입력에 대한 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printResult(result) {
    const startMsg =
      MESSAGE.MENU_RECOMMENDATION_RESULT + MESSAGE.MENU_WEEK + "\n";
    Console.print(startMsg + result + MESSAGE.SERVICE_END_MESSAGE);
  },

  printStart() {
    Console.print(MESSAGE.SERVICE_START_MESSAGE);
  },

  printEnd() {
    Console.print(MESSAGE.SERVICE_END_MESSAGE);
  },

  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
