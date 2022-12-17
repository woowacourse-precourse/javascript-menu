const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printStartMent() {
    Console.print("점심 메뉴 추천을 시작합니다.");
  },

  printError() {
    Console.print("[ERROR] 입력 형식을 지켜야합니다.");
  },
};

module.exports = OutputView;
