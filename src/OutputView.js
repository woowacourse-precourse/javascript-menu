const{ Console } = require("@woowacourse/mission-utils");
const{ OUTPUT, ERROR } = require("./Messages");
const{ RESULT_ITEMS } = require("./Values");

/**
 * 사용자에게 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  printStart() {
    Console.print(`${OUTPUT.START}\n`);
  },

  printSizeError() {
    Console.print(`${ERROR.INPUT_NAME}`);
  },

  printMemberError() {
    Console.print(`${ERROR.INPUT_MEMBERS}`);
  },

  printMenuError() {
    Console.print(`${ERROR.INPUT_MENU}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult() {
    Console.print();
  },
};

module.exports = OutputView;