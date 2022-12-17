const { Console } = require('@woowacourse/mission-utils');
const { MENUS, DAYS } = require('../constants');

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

  printRecommendMenuResult() {
    Console.print('메뉴 추천 결과입니다.');
    // Console.print(`[ 구분 | ${DAYS.join(' | ')} ]`);
  },
};

module.exports = OutputView;
