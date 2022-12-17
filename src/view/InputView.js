const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
 
  /**
   * 사용자에게 메뉴 추천을 받을 코치의 이름을 입력받는다.
   */
  readCoachNames(callback) {
    MissionUtils.Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)\n", callback);
  },
};

module.exports = InputView;