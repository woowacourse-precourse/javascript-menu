const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants');

const InputView = {
  input(message, callback) {
    Console.readLine(message, callback);
  },

  readCoachesName(callback) {
    this.input(GAME_MESSAGE.input_coach_name, callback);
  },

  readMenuCoachCantEat(message, callback) {
    this.input(message, callback);
  },
};

module.exports = InputView;
