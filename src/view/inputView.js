const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/gameMessage');

const InputView = {
  readCoachName(callback) {
    Console.readLine(INPUT_MESSAGE.GET_COACH, callback);
  },

  readHateMenu(callback) {
    Console.readLine(INPUT_MESSAGE.GET_HATE_MENU, callback);
  },
};

module.exports = InputView;
