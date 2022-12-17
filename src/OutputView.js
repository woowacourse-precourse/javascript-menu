const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printStartText() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.\n");
  },
  printCat(category) {
    MissionUtils.Console.print(`[ 카테고리 | ${category.join(" | ")} ]`);
  },
  printEndText() {
    MissionUtils.Console.print("메뉴 추천 결과입니다.");
    MissionUtils.Console.print(
      "[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]"
    );
  },
  printCoachLunch(coachs) {
    for (let i = 0; i < coachs.length; i++) {
      MissionUtils.Console.print(
        `[ ${coachs[i].getName()} | ${coachs[i].getLunch().join(" | ")} ]`
      );
    }
  },

  printExit() {
    MissionUtils.Console.print(`추천을 완료했습니다.`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
