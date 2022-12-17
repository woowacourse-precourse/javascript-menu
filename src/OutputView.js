const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printStartText() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.\n");
  },
  printCat(category) {
    MissionUtils.Console.print(`[ 구분 | ${category.join(" | ")}]`);
  },
  printEndText() {
    MissionUtils.Console.print(
      "메뉴 추천 결과입니다.\n[ 카테고리 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]"
    );
  },
};

module.exports = OutputView;
