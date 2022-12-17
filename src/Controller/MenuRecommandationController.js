const Menus = require('../Model/Menus');
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
      this.checkHateFoodsInMenus(hateFoods);

      coach.setHateFoods(hateFoods);

      this.readHateFoods(coaches, index + 1);
    });
  }

  checkHateFoodsInMenus(hateFoods) {
    hateFoods.forEach((hateFood) => {
      if (!Menus.hasMenu(hateFood)) {
        throw new Error('존재하지 않는 메뉴입니다.');
      }
    });
  }
}

module.exports = MenuRecommandationController;
