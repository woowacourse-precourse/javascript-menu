const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constant/Messages');

const InputView = {
  readCoachName(callback) {
    Console.readLine(MESSAGES.coachName, (names) => {
      callback(names.split(','));
    });
  },
};

module.exports = InputView;
