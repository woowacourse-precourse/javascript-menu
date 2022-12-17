const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constant/Messages');
const RecommendationService = require('../model/RecommendationService');
const InputView = require('../view/InputView');

class ServiceController {
  #service = new RecommendationService();

  start() {
    Console.print(MESSAGES.serviceStart);
    this.recieveCoachesName();
  }

  recieveCoachesName() {
    const onDeliveryNames = (names) => {
      this.#service.setCoaches(names);
      this.recieveExcludeMenuForEachCoach(names, 0);
    };

    InputView.readCoachName(onDeliveryNames);
  }

  recieveExcludeMenuForEachCoach(names, index) {
    const name = names[index];

    const onDeliveryMenu = (menu) => {
      this.#service.setMenuForEachCoah(menu, index);

      if (index + 1 === names.length) {
        this.nextAction();
      } else {
        this.recieveExcludeMenuForEachCoach(names, index + 1);
      }
    };

    InputView.readExcludeMenu(name, onDeliveryMenu);
  }

  nextAction() {}
}

module.exports = ServiceController;
