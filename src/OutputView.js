const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, RESULT, NEW_LINE } = require("./Constant");

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printResult(result, categories) {
    Console.print(MESSAGE.result);
    Console.print(RESULT.days);
    Console.print(categories);
    Console.print(result);
    Console.print(NEW_LINE + MESSAGE.end);
  },
};

module.exports = OutputView;
