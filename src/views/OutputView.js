const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  START_RECOMMEND: '점심 메뉴 추천을 시작합니다.',
};

const ERROR_FORM = '[ERROR] ';

const OutputView = {
  printErrorMessage(message) {
    Console.print(`${ERROR_FORM}${message}`);
  },

  printStartRecommend() {
    Console.print(MESSAGE.START_RECOMMEND);
  },
};

module.exports = OutputView;
