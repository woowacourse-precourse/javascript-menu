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
        const START_DAY_INDEX = 0;
        this.choiceCategory(0);
      } else {
        this.recieveExcludeMenuForEachCoach(names, index + 1);
      }
    };

    InputView.readExcludeMenu(name, onDeliveryMenu);
  }

  choiceCategory(index) {
    const DAY_INDEX = {
      0: 'Mon',
      1: 'Tue',
      2: 'Wed',
      3: 'Thu',
      4: 'Fri',
    };

    console.log('요일 : ', DAY_INDEX[index]);
    this.#service.choiceCategoryForEachDay(DAY_INDEX[index]);
  }
}

module.exports = ServiceController;
