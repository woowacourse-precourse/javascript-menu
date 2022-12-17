const Console = require('./utils/Console');
const InputView = require('./InputView');
const MenuGame = require('./MenuGame');

class MenuController {
  constructor(SAMPLE) {
    this.menuGame = new MenuGame();
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
