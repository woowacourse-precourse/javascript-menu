const { Console } = require("@woowacourse/mission-utils");
const INPUT_MESSAGES = require("../utils/constant/InputMessages");

const InputView = {
  module: Console,
  readCoachesName(callback) {
    this.module.readLine(INPUT_MESSAGES.readCoachesNameMessage, callback);
  },
  readHateFood(callback) {},
};

module.exports = InputView;
