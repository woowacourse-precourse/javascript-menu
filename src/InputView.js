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

      // 각 코치들이 먹지 못하는 메뉴 입력받기
    });
  },

  readInedibleMenus() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.inedibleMenuInput, (input) => {
      try {
        // check exception;
      } catch (error) {
        return this.readInedibleMenus();
      }

      // 각 요일별 메뉴 생성하기 
    });
  },
};

module.exports = InputView;
