const CoachData = require('../model/CoachData');
const RandomMenu = require('../model/RandomMenu');
const { readCoachesName, readDontLikeMenu } = require('../view/InputView');
const { printStart, printResult } = require('../view/OutputView');

class MenuController {
  #coachData;

  #randomMenu = new RandomMenu();

  start() {
    printStart();
    this.#randomMenu.setCategoryDays();
    readCoachesName(this.checkCoachesName.bind(this));
  }

  checkCoachesName(names) {
    const startNumber = 0;
    this.#coachData = new CoachData(names);
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
      this.calculateResult();
      return;
    }
    this.checkDontLikeMenu(count + 1);
  }

  calculateResult() {
    const result = this.#coachData.getHateMenus();
    this.#randomMenu.setResult(result);
    this.showResult();
  }

  showResult() {
    const { days, result } = this.#randomMenu.getResults();
    printResult(days, result);
  }
}

module.exports = MenuController;
