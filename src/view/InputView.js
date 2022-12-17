const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');

const InputView = {
  readCoachesName(callback) {
    Console.readLine(`${GAME_MESSAGE.inputCoachesName}\n`, (names) => {
      return callback(names);
    });
  },
};

module.exports = InputView;
