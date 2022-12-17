const { Console } = require('@woowacourse/mission-utils');
const { QUESTION } = require('../constant/Constant');

const InputView = {
  readNames(callback) {
    Console.readLine(QUESTION.ENTER_NAMES, callback);
  },

  readBanMenu(coachName, callback) {
    Console.readLine(QUESTION.BAN_MENU(coachName), callback);
  },
};

module.exports = InputView;
