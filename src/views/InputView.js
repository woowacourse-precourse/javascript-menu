const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants');

const InputView = {
  readCoaches(callback) {
    Console.readLine(INPUT_MESSAGE.COACH, callback);
  },

  readMenu(coach, callback) {
    Console.readLine(INPUT_MESSAGE.MENU(coach), callback);
  },
};

module.exports = InputView;
