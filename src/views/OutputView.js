const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printRecommendedMenu(coachsMenu, categorys) {
    Console.print('\n메뉴 추천 결과입니다.');
    OutputView.printDay();
    OutputView.printCategory(categorys);
    coachsMenu.forEach((coachMenu) => {
      OutputView.printCoachMenu(coachMenu);
    });
  },

  printDay() {
    const days = ['구분', '월요일', '화요일', '수요일 ', '목요일', '금요일'];
    Console.print(`[ ${days.join(' | ')} ]`);
  },

  printCategory(categorys) {
    const arr = ['_', '일식', '한식', '중식', '아시안', '양식'];
    categorys = categorys.map((category) => arr[category]);
    Console.print(`[ ${['카테고리', ...categorys].join(' | ')} ]`);
  },

  printCoachMenu(coachMenu) {
    Console.print(`[ ${coachMenu.join(' | ')} ]`);
  },
};

module.exports = OutputView;
