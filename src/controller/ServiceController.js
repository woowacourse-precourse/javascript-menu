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
    };
    InputView.readCoachName(onDeliveryNames);
  }
}

module.exports = ServiceController;
