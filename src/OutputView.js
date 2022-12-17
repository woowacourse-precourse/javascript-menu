const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printDay() {
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
  },

  printCategories(categories) {
    Console.print(`[ 카테고리 | ${categories.join(' | ')} ]`);
  },

  printMenus(coachNames, menus) {
    Console.print(`[ ${coachNames} | ${menus.join(' | ')} ]`);
  },
};

module.exports = OutputView;
