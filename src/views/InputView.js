const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readInput(message, callback) {
    Console.readLine(message, callback);
  },
};

module.exports = InputView;
