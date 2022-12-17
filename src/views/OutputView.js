const { Console } = require("@woowacourse/mission-utils");
const { MSG, RESULT, SEPARATOR } = require("../constants/constants");

const OutputView = {
  printInit() {
    Console.print(MSG.INIT);
  },

  printResult(categories, result) {
    Console.print(RESULT(categories));
    this.printDishes(result);
    Console.print(MSG.END_RECOMMEND);
    Console.close();
  },

  printDishes(result) {
    result.forEach((res) => {
      Console.print(`[ ${res[0]} | ${res[1].join(SEPARATOR)} ]`);
    });
  },
};

module.exports = OutputView;
