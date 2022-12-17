const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  DAYS: ['월요일', '화요일', '수요일', '목요일', '금요일'],

  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printMenus(categoris, names, foods) {
    Console.print('메뉴 추천 결과입니다.');
    Console.print(`[ ${['구분', ...OutputView.DAYS].join(' | ')} ]`);
    Console.print(`[ ${['카테고리', ...categoris].join(' | ')} ]`);
    for (let i = 0; i < names.length; i += 1) {
      Console.print(`[ ${[names[i], ...foods[i]].join(' | ')} ]`);
    }
    Console.print('\n추천을 완료했습니다.');
  },
};

module.exports = OutputView;
