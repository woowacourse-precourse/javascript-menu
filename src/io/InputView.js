const { Console } = require('@woowacourse/mission-utils');
const { GAME_MSG, COMMON_MSG } = require('../Constants');

const InputView = {
  readCoachNames(cb) {
    Console.readLine(GAME_MSG.enterCoachNames + COMMON_MSG.newLine, cb);
  },

  readFoodNames(cb) {
    Console.readLine(GAME_MSG.enterCantEat + COMMON_MSG.newLine, cb);
  },
};

module.exports = InputView;
