const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants');

const InputView = {
  readCoaches(callback) {
    Console.readLine(INPUT_MESSAGE.COACH, callback);
  },

  readMenu(coaches, index, callback) {
    const coachName = coaches.getCoachName(index);
    Console.readLine(INPUT_MESSAGE.MENU(coachName), callback);
  },
};

module.exports = InputView;
