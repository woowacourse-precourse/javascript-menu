const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  SERVICE_START: '점심 메뉴 추천을 시작합니다.',
  MENU_RESULT: '\n메뉴 추천 결과입니다.',
  SERVICE_END: '\n추천을 완료했습니다.',
  ERROR_HEADER: '[ERROR]',

  printServiceStart() {
    Console.print(OutputView.SERVICE_START);
  },

  printError(error) {
    Console.print(`${OutputView.ERROR_HEADER} ${error.message}`);
  },

  printMenuResult(menuResultView) {
    Console.print(OutputView.MENU_RESULT);
    Console.print(menuResultView);
  },

  printServiceEnd() {
    Console.print(OutputView.SERVICE_END);
    Console.close();
  },
};

module.exports = OutputView;
