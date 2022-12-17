const { GAME_STRING, GAME_NUMBER } = require('../Constant');
const CoachData = require('../model/CoachData');
const { readCoachesName, readDontLikeMenu } = require('../view/InputView');
const { printStart } = require('../view/OutputView');

class MenuController {
  #coachData;

  start() {
    printStart();
    readCoachesName(this.checkCoachesName.bind(this));
  }

  checkCoachesName(names) {
    console.log(names);
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
    const coachesLength = this.#coachData.getCoachLength() - 1;
    if (count === coachesLength) {
      return this.showResult();
    }
    this.checkDontLikeMenu(count + 1);
  }

  showResult() {}
}

module.exports = MenuController;
