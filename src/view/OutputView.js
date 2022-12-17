const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printOpening() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.");
  },

  printRecommendedMenu(categorys, coachsMenus) {
    MissionUtils.Console.print("\n메뉴 추천 결과입니다.");
    MissionUtils.Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    MissionUtils.Console.print(`[ 카테고리 | ${categorys.join(" | ")} ]`);
    coachsMenus.forEach(({ name, menus }) => {
      MissionUtils.Console.print(`[ ${name} | ${menus.join(" | ")} ]`);
    });
    MissionUtils.Console.print("\n추천을 완료했습니다.");
  },

  printErrorMessage(error) {
    MissionUtils.Console.print(error.message);
  },
};

module.exports = OutputView;
