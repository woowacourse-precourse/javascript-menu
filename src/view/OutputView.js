const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printRecommandMenuStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printRecommandMenuAllDone() {
    Console.print('추천을 완료했습니다.');
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = { OutputView };
