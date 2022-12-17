const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const OutputView = {
  printEmptyLine() {
    Console.print("");
  },

  printStartMessage() {
    Console.print("점심 메뉴 추천을 시작합니다.\n");
  },

  printErrorMessage(error) {
    Console.print(error);
  },

  printResult(recommandedCategories, coachData, coaches) {
    Console.print("메뉴 추천 결과입니다.");
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    Console.print(
      `[ 카테고리 | ${recommandedCategories[0]} | ${recommandedCategories[1]} | ${recommandedCategories[2]} | ${recommandedCategories[3]} | ${recommandedCategories[4]} ]`
    );
    coaches.forEach((coach) => {
      Console.print(
        `[ ${coach} | ${coachData[coach][0]} | ${coachData[coach][1]} | ${coachData[coach][2]} | ${coachData[coach][3]} | ${coachData[coach][4]} ]`
      );
    });
  },

  printCompleteMessage() {
    Console.print("추천을 완료했습니다.");
  },
};

module.exports = OutputView;
