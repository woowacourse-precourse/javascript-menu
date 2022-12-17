const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT } = require("./constants/messages");

const OutputView = {
  start() {
    Console.print(OUTPUT.START);
  },
};

module.exports = OutputView;
