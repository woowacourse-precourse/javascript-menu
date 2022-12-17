const { Console } = require('@woowacourse/mission-utils');
const { INPUT } = require('../constants/constants');

const InputView = {
  inputCoachNames(callback) {
    Console.readLine(INPUT.NAMES + '\n', callback);
  },

  inputCoachUnableMenu(name, callback) {
    Console.readLine(INPUT.NO_EAT(name) + '\n', callback);
  },
};

module.exports = InputView;
