const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constant/Messages');
const InputView = require('../view/InputView');

class ServiceController {
  start() {
    Console.print(MESSAGES.serviceStart);
    this.recieveCoachesName();
  }

  recieveCoachesName() {
    const onDeliveryNames = (names) => {};
    InputView.readCoachName(onDeliveryNames);
  }
}

module.exports = ServiceController;
