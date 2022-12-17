const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Util/Constants');

const InputView = {
  readCoachName(callback) {
    Console.readLine(MESSAGE.ENTER_COACH_NAME, callback);
  },

  readExceptFood(callback) {
    Console.readLine(MESSAGE.ENTER_EXCEPT_FOOD, callback);
  },
};

module.exports = InputView;
