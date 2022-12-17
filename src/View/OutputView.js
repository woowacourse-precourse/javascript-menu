const MissionUtils = require("@woowacourse/mission-utils");

const { DAY_OF_WEEK } = require("../constant/value");

const OutputView = {
  printStartComment() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.\n");
  },

  printMenuResult(menuService) {
    const categoryName = menuService.makeCategoryName();
    const coaches = menuService.getCoaches();

    MissionUtils.Console.print("\n메뉴 추천 결과입니다.");
    MissionUtils.Console.print("[ 구분 | " + DAY_OF_WEEK.join(" | ") + " ]");
    MissionUtils.Console.print(
      "[ 카테고리 | " + categoryName.join(" | ") + " ]"
    );
    coaches.forEach((coach) => {
      MissionUtils.Console.print(
        "[ " +
          coach.getName() +
          " | " +
          coach.getMenuOfWeek().join(" | ") +
          " ]"
      );
    });
    MissionUtils.Console.print("\n추천을 완료했습니다.");
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
