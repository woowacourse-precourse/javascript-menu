const { Console } = require('@woowacourse/mission-utils');
const { GAME_MSG, COMMON_MSG } = require('../Constants');

const InputView = {
  readCoachNames(cb) {
    Console.readLine(GAME_MSG.enterCoachNames + COMMON_MSG.newLine, cb);
  },

  readFoodNames(cb) {
    const msg = (name) =>
      COMMON_MSG.newLine + name + GAME_MSG.enterCantEat + COMMON_MSG.newLine;
    return function (name, names) {
      Console.readLine(msg(name), cb(name, names));
    };
  },

  readClose() {
    Console.close();
  },
};

module.exports = InputView;
