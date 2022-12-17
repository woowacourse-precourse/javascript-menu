const { Console } = require("@woowacourse/mission-utils");
const INPUT_MESSAGES = require("../utils/constant/InputMessages");

const InputView = {
  module: Console,
  readCoachesName(callback) {
    this.module.readLine(INPUT_MESSAGES.readCoachesNameMessage, callback);
  },
  readHateFood(name, callback) {
    this.module.readLine(name + INPUT_MESSAGES.readHateFoodMessage, callback);
  },
  onEnd() {
    this.module.close();
  },
};

module.exports = InputView;
