const { GAME_STRING, GAME_NUMBER } = require('../Constant');
const CoachData = require('../model/CoachData');
const RandomMenu = require('../model/RandomMenu');
const { readCoachesName, readDontLikeMenu } = require('../view/InputView');
const { printStart } = require('../view/OutputView');

class MenuController {
  #coachData;

  #randomMenu = new RandomMenu();

  start() {
    printStart();
    this.#randomMenu.setCategoryDays();
    this.#randomMenu.setRandomMenu('일식');
    readCoachesName(this.checkCoachesName.bind(this));
  }

  checkCoachesName(names) {
    const startNumber = 0;
    this.#coachData = new CoachData(names);
    this.#coachData.checkCoach();
    this.checkDontLikeMenu(startNumber);
  }

  checkDontLikeMenu(count) {
    const coachName = this.#coachData.getCoachName(count);
    readDontLikeMenu(coachName, count, this.checkHateMenu.bind(this));
  }

  checkHateMenu(name, count, menu) {
    this.#coachData.setHateMenus(name, menu);
    const coachesLength = this.#coachData.getCoachLength() - 1;
    if (count === coachesLength) {
      return this.showResult();
    }
    this.checkDontLikeMenu(count + 1);
  }

  showResult() {
    const result = this.#coachData.getHateMenus();
    this.#randomMenu.setResult(result);
  }
}

module.exports = MenuController;
