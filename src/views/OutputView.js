const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printInitialMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printOneCoachMenu(name, menu) {
    Console.print(`[ ${name} | ${menu.join(' | ')} ]`);
  },

  printResultTitle(weekCategories) {
    Console.print('\n메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    Console.print(`[ 카테고리 | ${weekCategories.join(' | ')} ]`);
  },

  printEndMessage() {
    Console.print('\n추천을 완료했습니다.');
  },

  printErrorMessage(errorMessage) {
    Console.print(`${errorMessage}\n`);
  },

  close() {
    Console.close();
  },
};

module.exports = OutputView;
