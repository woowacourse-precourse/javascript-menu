const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../util/constants/message');

const inputView = {
  readCoachNames(callback) {
    Console.readLine(MESSAGE.readCoachNames, (input) => {
      callback(input);
    });
  },

  readInedible(callback, name) {
    Console.readLine(name + MESSAGE.readInedible, (input) => {
      callback(input);
    });
  },
};

module.exports = inputView;
