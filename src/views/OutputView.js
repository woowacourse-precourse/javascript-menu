const { Console } = require("@woowacourse/mission-utils");
const { MSG, RESULT } = require("../constants/constants");

const OutputView = {
  printInit() {
    Console.print(MSG.INIT);
  },

  printResult(categories, result) {
    Console.print(RESULT(categories));
    result.forEach((res) => {
      Console.print(`[ ${res[0]} | ${res[1].join(" | ")} ]`);
    });
    Console.print(MSG.END_RECOMMEND);
    Console.close();
  },
};

module.exports = OutputView;
