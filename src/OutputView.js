const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printResult() {
    Console.pri    Console.print('\n최종 게임 결과');
    Console.close();
  }
};

module.exports = OutputView;
