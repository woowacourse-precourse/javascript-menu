const CoachService = require('../Service/CoachService');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

class MenuRecommandationController {
  #coachService;

  constructor() {
    this.#coachService = new CoachService();
  }

  run() {
    this.startService();
  }

  startService() {
    OutputView.printServiceStart();

    this.readCoachNames();
  }

  readCoachNames() {
    InputView.readCoachNames((coachNames) => {
      this.createCoaches(coachNames);
    });
  }

  createCoaches(coachNames) {
    this.#coachService.createCoaches(coachNames);
    const coaches = this.#coachService.getCoaches();
    this.readHateFoods(coaches, 0);
  }

  readHateFoods(coaches, index) {
    if (coaches.length === index) return;

    const coach = coaches[index];
    InputView.readHateFoods(coach.getName(), (hateFoods) => {
      console.log(hateFoods);
      this.readHateFoods(coaches, index + 1);
    });
  }
}

module.exports = MenuRecommandationController;
