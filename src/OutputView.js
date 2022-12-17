const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printOpening() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.");
  },

  printRecommendedMenu(days, recommendedMenu) {
    MissionUtils.Console.print("\n메뉴 추천 결과입니다.");
    MissionUtils.Console.print(`[ 구분 | ${days.join(" | ")} ]`);
    recommendedMenu.forEach(({ coach, menus }) => {
      MissionUtils.Console.print(`[ ${coach} | ${menus.join(" | ")} ]`);
    });
    MissionUtils.Console.print("\n 추천을 완료했습니다.");
  },

  printErrorMessage(error) {
    MissionUtils.Console.print(error.message);
  },
};

module.exports = OutputView;
