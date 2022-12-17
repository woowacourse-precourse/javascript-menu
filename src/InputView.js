const { Console } = require('@woowacourse/mission-utils');
const { INPUT_COACH_NAME } = require('./Constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readCoachName(callback) {
    Console.readLine(INPUT_COACH_NAME, callback);
  },
};

module.exports = InputView;
