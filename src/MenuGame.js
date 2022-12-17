/**
 * menu 게임을 관리하는 클래스
 */
class MenuGame {
  constructor(SAMPLE, progressSelectMenu) {
    this.SAMPLE = SAMPLE;
    this.progressSelectMenu = progressSelectMenu;

    this.userName = [];
    this.userCount = 0;
  }

  progressMenu() {}

  setUserName(userName) {
    return (this.userName = userName);
  }
}

module.exports = MenuGame;
