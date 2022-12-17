const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');
const InputErrorHandler = require('../utils/InputErrorHandler');
const Validation = require('../Validation');

const InputView = {
  readCoachesName(callback) {
    Console.readLine(`${GAME_MESSAGE.inputCoachesName}\n`, (coachesName) => {
      const check = InputErrorHandler(Validation.coachAndName, coachesName);
      if (check) return callback(coachesName);
      return InputView.readCoachesName(callback);
    });
  },
  readDontLikeMenu(name, count, callback) {
    Console.readLine(GAME_MESSAGE.showDontLikeMenu(name), (menus) => {
      const check = InputErrorHandler(Validation.menu, menus);
      if (check) return callback(name, count, menus);
      return InputView.readDontLikeMenu(name, count, callback);
    });
  },
};

module.exports = InputView;
