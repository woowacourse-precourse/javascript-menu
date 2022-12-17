const MissionUtils = require('@woowacourse/mission-utils');
const { CONSOLE_MESSAGE } = require('./utils/constants');

const InputView = {
  readCoaches() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.coachInput, (input) => {
      try {
        // 예외 사항 검증하기
      } catch (error) {
        return this.readCoaches();
      }

      // 각 코치들이 먹지 못하는 메뉴 입력받기 
    });
  },
};

module.exports = InputView;
