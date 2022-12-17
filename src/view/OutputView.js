const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printStartMessage() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.\n");
  },
};

module.exports = OutputView;
