const { Console } = require('@woowacourse/mission-utils');

const Output = {
  printInit() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printRecommendation(menuList, categoryList) {
    const dayList = ['구분', '월요일', '화요일', '수요일 ', '목요일', '금요일'];
    Console.print('\n메뉴 추천 결과입니다.\n');
    Console.print(`[ ${dayList.join(' | ')} ]`);
    Output.printCategory(categoryList);
    menuList.forEach((menu) => {
      Output.printCoachMenu(menu);
    });
  },

  printCoachMenu(coachMenu) {
    Console.print(`[ ${coachMenu.join(' | ')} ]`);
  },

  printCategory(categoryList) {
    const arr = ['_', '일식', '한식', '중식', '아시안', '양식'];
    categoryList = categoryList.map((category) => arr[category]);
    Console.print(`[ ${['카테고리', ...categoryList].join(' | ')} ]`);
  },
};

module.exports = Output;
