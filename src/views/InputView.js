const { Console } = require("@woowacourse/mission-utils");
const { MSG } = require("../constants/constants");

const InputView = {
  readCoaches(callback) {
    Console.readLine(MSG.INPUT_COACH, callback);
  },
};

module.exports = InputView;
