const MenuMaker = require('./MenuMaker');
const OutputView = require('./OutputView');
const Console = require('./utils/Console');

/**
 * menu 게임을 관리하는 클래스
 */
class MenuGame {
  constructor(SAMPLE, progressSelectMenu) {
    this.menuMaker = new MenuMaker();
    this.SAMPLE = SAMPLE;
    this.progressSelectMenu = progressSelectMenu;

    this.userName = [];
    this.menu = [];
    this.userCount = 0;
    this.dayMenus = [];
  }

  progressMenu() {
    if (this.userName.length !== this.userCount) {
      return this.progressSelectMenu(this.userName[this.userCount]);
    }

    this.menuMaker.setSAMPLE(this.SAMPLE);
    this.menuMaker.setuserName(this.userName);

    this.dayMenu();
    OutputView.printResult(this.userName, this.dayMenus);
    Console.close();
  }

  dayMenu() {
    return Array(5)
      .fill(5)
      .map(day => (day = this.dayMenus.push(this.menuMaker.creatMenu())));
  }

  setUserName(userName) {
    return (this.userName = userName);
  }

  setMenu(menu) {
    if (menu.includes(',')) {
      return this.menu.push(menu.split(','));
    }

    return this.menu.push([menu]);
  }

  increseUserCount() {
    return (this.userCount += 1);
  }
}

module.exports = MenuGame;
