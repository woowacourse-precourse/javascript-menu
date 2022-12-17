const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printEmptyLine() {
    MissionUtils.Console.print("");
  },

  printStartMessage() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.\n");
  },

  printErrorMessage(error) {
    MissionUtils.Console.print(error);
  },

  printResult(recommandedCategories, coachData, coaches) {
    MissionUtils.Console.print("메뉴 추천 결과입니다.");
    MissionUtils.Console.print(
      "[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]"
    );
    MissionUtils.Console.print(
      `[ 카테고리 | ${recommandedCategories[0]} | ${recommandedCategories[1]} | ${recommandedCategories[2]} | ${recommandedCategories[3]} | ${recommandedCategories[4]} ]`
    );
    coaches.forEach((coach) => {
      MissionUtils.Console.print(
        `[ ${coach} | ${coachData[coach][0]} | ${coachData[coach][1]} | ${coachData[coach][2]} | ${coachData[coach][3]} | ${coachData[coach][4]} ]`
      );
    });
  },

  printCompleteMessage() {
    MissionUtils.Console.print("추천을 완료했습니다.");
  },
};

module.exports = OutputView;
