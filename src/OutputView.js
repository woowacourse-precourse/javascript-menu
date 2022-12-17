const { Console } = require('@woowacourse/mission-utils');
const { DAYS, MESSAGES } = require('./utils/constants');
const { joinResultMessage } = require('./utils/menuUtil');

const OutputView = {
  //서비스 시작 문구 출력
  printStart() {
    Console.print(MESSAGES.START);
  },

  printResult(category, coachMenu) {
    Console.print(MESSAGES.RESULT);
    Console.print(joinResultMessage(DAYS));
    Console.print(joinResultMessage(category));
    coachMenu.map((el) => {
      Console.print(joinResultMessage(el));
    });
    Console.print(MESSAGES.END);
    Console.close();
  },
};

module.exports = OutputView;
