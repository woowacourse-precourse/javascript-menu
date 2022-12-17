const { Console } = require('@woowacourse/mission-utils');
const { RESULT } = require('./Constants');

const OutputView = {
  printStartMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printEndMessage(categories, coachs) {
    Console.print('메뉴 추천 결과입니다.\n');
    Console.print(`[ ${RESULT.DAYS.join(' | ')} ]`);
    Console.print(`[ ${RESULT.CATEGORY} | ${categories.join(' | ')} ]`);
    for (const coach of coachs) {
      Console.print(`[ ${coach.name} | ${coach.recommendedMenu.join(' | ')} ]`);
    }
    Console.print('\n추천을 완료했습니다.');
    Console.close();
  },
};

module.exports = OutputView;
