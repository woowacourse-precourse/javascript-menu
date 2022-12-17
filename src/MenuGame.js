/**
 * menu 게임을 관리하는 클래스
 */
class MenuGame {
  constructor(SAMPLE, progressSelectMenu) {
    this.SAMPLE = SAMPLE;
    this.progressSelectMenu = progressSelectMenu;

    this.userName = [];
    this.menu = [];
    this.userCount = 0;
  }

  progressMenu() {
    console.log(this.userName, this.menu, this.userCount);
    if (this.userName.length !== this.userCount) {
      return this.progressSelectMenu(this.userName[this.userCount]);
    }
  }

  setUserName(userName) {
    return (this.userName = userName);
  }

  setMenu(menu) {
    return (this.menu = menu);
  }

  increseUserCount() {
    return (this.userCount += 1);
  }
}

module.exports = MenuGame;
