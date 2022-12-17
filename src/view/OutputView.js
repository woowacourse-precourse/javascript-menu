const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  start() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  recommend() {
    Console.print(
    `
메뉴 추천 결과입니다.
[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
    `);

  },

  end() {
    Console.print('\n추천을 완료했습니다.');
  },

};


module.exports = OutputView;