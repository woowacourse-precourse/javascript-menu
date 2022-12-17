const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  output(message) {
    Console.print(message);
  },

  close() {
    Console.close();
  },

  // printErrorMessage(error) {
  //   this.output(error.message);
  // },
};

module.exports = OutputView;
