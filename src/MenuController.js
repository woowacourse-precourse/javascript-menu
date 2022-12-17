const Console = require('./utils/Console');
const InputView = require('./InputView');

class MenuController {
  constructor() {
    this.#initPrint();
  }

  #initPrint() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  }

  progressUserName() {
    InputView.readUserName(name => {});
  }

  progressSelectMenu() {
    InputView.readSelectMenu(menu => {});
  }
}

module.exports = MenuController;
