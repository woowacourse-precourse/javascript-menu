const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printEmptyLine() {
    MissionUtils.Console.print("");
  },

  printStartMessage() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.\n");
  },
};

module.exports = OutputView;
