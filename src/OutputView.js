const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./modules/Constants');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },
  printResult(categories, coaches) {
    Console.print(MESSAGE.RESULT_INFORM);
    Console.print(MESSAGE.RESULT_SECTION);
    Console.print(MESSAGE.RESULT_CATEGORY(categories));
    for (const coach of coaches) {
      const name = coach.getName();
      const menus = coach.getMenu();
      Console.print(MESSAGE.RESULT_MENU(name, menus));
    }
    Console.print(MESSAGE.RESULT_COMPLETE);
    Console.close();
  },
  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
