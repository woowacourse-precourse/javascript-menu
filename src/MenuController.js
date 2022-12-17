const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Coach = require('./Coach');

class MenuController {
  #coachsName;
  #coachs;

  constructor() {
    this.#coachs = [];
  }

  startRecommend() {
    OutputView.printStartMessage();
    InputView.readCoachsName(this.getCoachsName.bind(this));
  }

  getCoachsName(coachsName) {
    this.#coachsName = coachsName.split(',');
    return this.readCoachsHateMenu();
  }

  readCoachsHateMenu() {
    const coachIndex = 0;
    InputView.readHateMenu(
      coachIndex,
      this.#coachsName,
      this.makeCoach.bind(this)
    );
  }

  makeCoach(coachName, hateMenu) {
    this.#coachs.push(new Coach(coachName, hateMenu.split(',')));
  }
}

module.exports = MenuController;
