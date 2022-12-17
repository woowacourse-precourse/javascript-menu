const { Console } = require("@woowacourse/mission-utils");
const { COACH_NAME } = require("../constants/Messages");

const OutputVIew = {
  printFirstMessage() {
    Console.print(COACH_NAME.OPENING);
  },

  printError(errorLog) {
    Console.print(errorLog.message);
  },
};

module.exports = OutputVIew;
