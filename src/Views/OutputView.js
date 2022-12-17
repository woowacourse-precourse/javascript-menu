const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printException(errorText) {
    Console.print(errorText);
  }

};

module.exports = OutputView;