const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constants');

const InputView = {
  inputNames(callback) {
    Console.readLine(MESSAGE.names, callback);
  },

  inputNotFood(name, callback) {
    Console.readLine(`${name}${MESSAGE.foods}`, callback);
  },

};

module.exports = InputView;
