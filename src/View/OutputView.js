const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  SERVICE_START: '점심 메뉴 추천을 시작합니다.',

  printServiceStart() {
    Console.print(OutputView.SERVICE_START);
  },
};

module.exports = OutputView;
