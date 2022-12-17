const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
const { CONSOLE_MESSAGE } = require('./utils/constants');

const InputView = {
  readCoaches() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.coachInput, (input) => {
      try {
        Exception.checkCoachesInput(input);
      } catch (error) {
        return this.readCoaches();
      }

      // for each coach readInedibleMenus;
    });
  },

  readInedibleMenus(coach) {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.inedibleMenuInput(coach), (input) => {
      try {
        Exception.checkInedibleMenusInput(input);
      } catch (error) {
        return this.readInedibleMenus();
      }

      //  각 요일별 메뉴 생성하기
    });
  },
};

module.exports = InputView;
