const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');

const OutputView = {
  printStart() {
    Console.print(GAME_MESSAGE.start);
  },
};

module.exports = OutputView;
