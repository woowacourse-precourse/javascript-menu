const{ Console } = require("@woowacourse/mission-utils");
const{ INPUT } = require("./Messages");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {

  /**
   * 사용자의 이름을 입력받는다.
   */
  readName(callback) {
    Console.readLine(`${INPUT.NAME}\n`, callback);
  },

  /**
   * 사용자에게 못먹는 음식을 입력받는다.
   */
  readMenu(user, callback) {
    Console.readLine(`\n${INPUT.HATE_MENU(user)}\n`, callback);
  },
};

module.exports = InputView;