const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printRecommendedMenu(coachsMenu) {
    Console.print('\n메뉴 추천 결과입니다.');
    OutputView.printDay();
    OutputView.printCategory();
    coachsMenu.forEach((coachMenu) => {
      OutputView.printCoachMenu(coachMenu);
    });
  },

  printDay() {
    const days = ['구분', '월요일', '화요일', '수요일 ', '목요일', '금요일'];
    Console.print(`[ ${days.join(' | ')} ]`);
  },

  printCategory() {
    const categorys = ['카테고리', '한식', '한식', '일식', '중식', '아시안'];
    Console.print(`[ ${categorys.join(' | ')} ]`);
  },

  printCoachMenu(coachMenu) {
    Console.print(`[ ${coachMenu.join(' | ')} ]`);
  },
};

module.exports = OutputView;
