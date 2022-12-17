const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  input(message, callback) {
    Console.readLine(message, callback);
  },

  // readBridgeSize(callback) {
  //   this.input(GAME_MESSAGE.input_size, callback);
  // },
};

module.exports = InputView;
