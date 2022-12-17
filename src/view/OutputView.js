const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

const OutputView = {
  output(message) {
    Console.print(message);
  },

  close() {
    Console.close();
  },

  printErrorMessage(error) {
    this.output(error.message);
  },

  printStartMessage() {
    this.output(GAME_MESSAGE.start);
  },

  printMenuList(menuList) {
    this.output(menuList);
  },

  printEndMessage() {
    this.output(GAME_MESSAGE.end);
  },
};

module.exports = OutputView;
