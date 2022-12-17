const { GAME_MESSAGES } = require("../Utils/Constants");
const { START, RESULT, END } = GAME_MESSAGES;
const { print } = require("../Utils/MissionUtils");

/**
 * 사용자에게 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 서비스 시작 문구를 출력한다.
   */
  printStartMessage() {
    print(START);
  },

  /**
   * 결과와 서비스 종료 문구를 출력한다.
   */
  printResult(category, result) {
    print(RESULT);
    print(`[ 카테고리 | ${category} ]`);
    print(`| ${result} ]`);
    print(END);
    close();
  },
};

module.exports = OutputView;
