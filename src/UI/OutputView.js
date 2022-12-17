const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('../constants/constants');

const OutputView = {
  gameStart() {
    Console.print(MESSAGE.GAME_START);
  },

  printResultMessage() {
    Console.print(MESSAGE.RESULT);
  },

  printDays() {
    Console.print(MESSAGE.DAYS);
  },

  printCategory(category) {
    Console.print(MESSAGE.CATREGORIES(category));
  },

  printCoachResult(foodList) {
    Console.print(`[ ${foodList}] `);
  },

  quitGame() {
    Console.print(MESSAGE.GAME_END);
    Console.close();
  },

  ErrorCoachCount() {
    Console.print(ERROR.COACHCOUNT);
  },

  ErrorCoachName() {
    Console.print(ERROR.COACHNAME);
  },

  ErrorNoMenu() {
    Console.print(ERROR.NO_MENU);
  },

  ErrorNoMenuLength() {
    Console.print(ERROR.NO_MENU_LENGTH);
  },
};

module.exports = OutputView;
