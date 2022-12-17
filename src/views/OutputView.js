const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  DAYS: ['월', '화', '수', '목', '금'],

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
  },
};

module.exports = OutputView;
