const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMsg() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },
};

module.exports = OutputView;
