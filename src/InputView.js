const { Console } = require('@woowacourse/mission-utils');
const { INPUT_COACH_NAME, NOT_EAT_MENU } = require('./Constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readCoachName(callback) {
    Console.readLine(INPUT_COACH_NAME, callback);
  },

  readNotEatMenu(callback) {
    Console.readLine(NOT_EAT_MENU, callback);
  },
};

module.exports = InputView;
