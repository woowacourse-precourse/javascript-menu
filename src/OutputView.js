const MissionUtils = require('@woowacourse/mission-utils');
const { CONSOLE_MESSAGE, RESULT_MESSAGE } = require('./utils/constants');

const OutputView = {
  printStartMessage() {
    MissionUtils.Console.print(CONSOLE_MESSAGE.start);
  },

  printResult(selectedCategories, coaches, menus) {
    MissionUtils.Console.print(RESULT_MESSAGE.result);
    MissionUtils.Console.print(RESULT_MESSAGE.days);
    MissionUtils.Console.print(RESULT_MESSAGE.categories(selectedCategories));

    coaches.forEach((coach) => {
      MissionUtils.Console.print(RESULT_MESSAGE.coachMenus(coach, menus[coach]));
    });

    MissionUtils.Console.print(RESULT_MESSAGE.end);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
