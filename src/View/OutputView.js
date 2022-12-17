const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/message");

const OutputView = {
  printServiceStart() {
    Console.print(OUTPUT_MESSAGE.serviceStart);
  },

  printResultRecommendMenu(categroys, coach) {
    Console.print("메뉴 추천 결과입니다.");
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    Console.print(`[ 카테고리 | ${categroys.join(" | ")} ]`);
    Object.keys(coach).forEach((coachName) => {
      Console.print(
        `[ ${coachName} | ${coach[coachName].ateMenu.join(" | ")} ]`
      );
    });
    Console.print("추천을 완료했습니다.");
  },
};

module.exports = OutputView;
