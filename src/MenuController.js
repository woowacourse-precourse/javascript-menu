const Console = require('./utils/Console');
const InputView = require('./InputView');
const MenuGame = require('./MenuGame');
const userNameValid = require('./validation/userNameValid');
const CatchError = require('./validation/CatchError');

class MenuController {
  constructor(SAMPLE) {
    this.SAMPLE = SAMPLE;
    this.menuGame = new MenuGame(this.SAMPLE, () => this.progressSelectMenu());
    this.#initPrint();
  }

  #initPrint() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  }

  progressUserName() {
    InputView.readUserName(names => {
      if (!CatchError.UserName(names)) {
        return this.progressUserName();
      }

      this.menuGame.setUserName(names.split(','));
      this.menuGame.progressMenu();
    });
  }

  progressSelectMenu(name) {
    InputView.readSelectMenu(name, menu => {});
  }
}

module.exports = MenuController;
