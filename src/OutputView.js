const { Console } = require('@woowacourse/mission-utils');
const { SERVICE_MESSAGE } = require('./Constants');

class OutputView {
  constructor() {}

  printResult(names, categories, recommandMenus) {
    Console.print(SERVICE_MESSAGE.RESULT);
    Console.print(SERVICE_MESSAGE.DAYS);
    Console.print(SERVICE_MESSAGE.CATEGORY(categories));
    names.forEaach((name, index) =>
      Console.print(SERVICE_MESSAGE.MENU(name, recommandMenus[index]))
    );
    Console.print(SERVICE_MESSAGE.FINISH);
  }
}

module.exports = OutputView;
