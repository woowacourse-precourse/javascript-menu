const { GAME_STRING } = require('../Constant');
const { readCoachesName, readDontLikeMenu } = require('../view/InputView');
const { printStart } = require('../view/OutputView');

class MenuController {
  start() {
    printStart();
    readCoachesName(this.checkCoachesName.bind(this));
  }

  checkCoachesName(names) {
    console.log(names);
    const nameArray = names.split(GAME_STRING.splitString);
    nameArray.forEach((coachName) => {
      readDontLikeMenu(coachName, this.checkDontLikeMenu.bind(this));
    });
  }

  checkDontLikeMenu(menus) {
    console.log(menus);
    return;
  }
}

module.exports = MenuController;
