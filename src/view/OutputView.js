const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/index");

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printStartMessage() {
    this.print(MESSAGE.START_RECOMMENDATION);
  },

  printResultMessage() {
    this.print(MESSAGE.RECOMMEND_RESULT);
  },

  printResult(categoryMessage, coachMessages) {
    this.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    this.print(categoryMessage);
    coachMessages.forEach((message) => {
      this.print(message);
    });
  },

  printEndMessage() {
    this.print(MESSAGE.END_RECOMMENDATION);
  },
};

module.exports = OutputView;
