const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printStartText() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.\n");
  },
  printCat(category) {
    MissionUtils.Console.print(`[ 카테고리 | ${category.join(" | ")}]`);
  },
  printEndText() {
    MissionUtils.Console.print(
      "메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]"
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
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
