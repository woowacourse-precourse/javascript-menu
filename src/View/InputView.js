const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constants');

const InputView = {
  inputNames(callback) {
    Console.readLine(MESSAGE.names, callback);
  },

};

module.exports = InputView;
