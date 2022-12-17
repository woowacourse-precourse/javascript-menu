const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  MESSAGE: {
    start: '점심 메뉴 추천을 시작합니다.',
  },

  printStart() {
    Console.print(OutputView.MESSAGE.start);
  },
};

module.exports = OutputView;
