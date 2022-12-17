const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('../constants/constants');

const OutputView = {
  gameStart() {
    Console.print(MESSAGE.GAME_START);
  },

  ErrorCoachCount() {
    Console.print(ERROR.COACHCOUNT);
  },

  ErrorCoachName() {
    Console.print(ERROR.COACHNAME);
  },
};

module.exports = OutputView;
