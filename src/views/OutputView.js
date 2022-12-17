const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printResult(resultArray) {
    resultArray.forEach((resultEl) => {
      Console.print(resultEl);
    });
  },
};

module.exports = OutputView;
