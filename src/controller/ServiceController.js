const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constant/Messages');

class ServiceController {
  start() {
    Console.print(MESSAGES.serviceStart);
  }
}

module.exports = ServiceController;
