const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 메뉴 추천 프로그램의 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  MESSAGE_START_LUNCH_MENU_RECOMMEND: "점심 메뉴 추천을 시작합니다.",
  MESSAGE_END_LUNCH_MENU_RECOMMEND: "추천을 완료했습니다.",
  printRecommendStartMessage() {
    Console.print(`${OutputView.MESSAGE_START_LUNCH_MENU_RECOMMEND}`);
  },
  printRecommendEndMessage() {
    Console.print(`${OutputView.MESSAGE_END_LUNCH_MENU_RECOMMEND}`);
  },
};

module.exports = OutputView;
