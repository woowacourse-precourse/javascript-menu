const { Console } = require('@woowacourse/mission-utils');
const { SERVICE_MESSAGE } = require('./Constants');

class OutputView {
  constructor() {}

  printResult(names, categories, recommandMenus) {
    Console.print(SERVICE_MESSAGE.RESULT);
    Console.print(SERVICE_MESSAGE.DAYS);
    Console.print(SERVICE_MESSAGE.CATEGORY(categories));
    recommandMenus.forEach((menus, index) =>
      Console.print(SERVICE_MESSAGE.MENU(names[index], menus))
    );
    Console.print(SERVICE_MESSAGE.FINISH);
  }
}

module.exports = OutputView;
