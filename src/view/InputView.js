const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');
const InputErrorHandler = require('../utils/InputErrorHandler');
const Validation = require('../Validation');

const InputView = {
  readCoachesName(callback) {
    Console.readLine(`${GAME_MESSAGE.inputCoachesName}\n`, (names) => {
      const check = InputErrorHandler(
        () => Validation.name(names),
        InputView.readCoachesName,
        callback
      );
      if (check) return callback(names);
    });
  },
  readDontLikeMenu(name, callback) {
    Console.readLine(GAME_MESSAGE.showDontLikeMenu(name), (menus) => {
      return callback(menus);
    });
  },
};

module.exports = InputView;
