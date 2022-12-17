const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/gameMessage');

const InputView = {
  readCoachName(callback) {
    Console.readLine(INPUT_MESSAGE.GET_COACH, callback);
  },

  readHateMenu(callback, coachNames, count) {
    Console.readLine(
      coachNames[count] + INPUT_MESSAGE.GET_HATE_MENU,
      callback
    );
  },
};

module.exports = InputView;
