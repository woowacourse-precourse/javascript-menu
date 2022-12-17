const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./view.constants");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 코치 이름을 입력받는다.
   */
  readCoachNames(callback) {
    Console.readLine(MESSAGE.REQUEST_COACH_NAME, callback);
  },

  /**
   * 코치가 원하지 않는 메뉴를 입력받는다.
   */
  readCoachNotWantMenu(coachName, callback) {
    Console.readLine(coachName + MESSAGE.REQUEST_NOT_WANT_MENU, callback);
  },

  /**
   * 입력을 종료한다.
   */
  close() {
    Console.close();
  },
};

module.exports = InputView;
