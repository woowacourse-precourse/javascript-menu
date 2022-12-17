const { Console } = require("@woowacourse/mission-utils");
const { MSG, HATE } = require("../constants/constants");

const InputView = {
  readCoaches(callback) {
    Console.readLine(MSG.INPUT_COACH, callback);
  },
  readHates(coach, callback) {
    Console.readLine(HATE(coach), callback);
  },
};

module.exports = InputView;
