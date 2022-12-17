const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMsg() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },
  
  printRecommendation(categories, menuArr) {
    Console.print('\n메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    Console.print(`[ ${categories.join(" | ")} ]`);
    menuArr.forEach(menus => {
      Console.print(`[ ${menus.join(" | ")} ]`);
    });
  },

  printEndMsg() {
    Console.print('\n추천을 완료했습니다.');
  },

};

module.exports = OutputView;
