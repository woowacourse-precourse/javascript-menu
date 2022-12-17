const { Console } = require("@woowacourse/mission-utils");
const { COACH_NAME } = require("../constants/Messages");

const OutputVIew = {
  printFirstMessage() {
    Console.print(COACH_NAME.OPENING);
  },
};

module.exports = OutputVIew;
