const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/message");

const OutputView = {
  printServiceStart() {
    Console.print(OUTPUT_MESSAGE.serviceStart);
  },

  printResultRecommendMenu(categroy, coach) {
    Console.print("메뉴 추천 결과입니다.");
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    Object.keys(coach).forEach((coachName) => {
      Console.print(
        `[ ${coachName} | ${coach[coachName].ateMenu.join(" |")} ]`
      );
    });
  },
};

module.exports = OutputView;
