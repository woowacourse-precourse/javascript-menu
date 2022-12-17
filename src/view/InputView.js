const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/index");

const InputView = {
  input(message, callback) {
    Console.readLine(message, callback);
  },

  readCoachName(callback) {
    this.input(MESSAGE.COACH_NAME, callback);
  },
};

module.exports = InputView;
