const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  START_RECOMMEND: '점심 메뉴 추천을 시작합니다.',
};

const OutputView = {
  printStartRecommend() {
    Console.print(MESSAGE.START_RECOMMEND);
  },
};

module.exports = OutputView;
