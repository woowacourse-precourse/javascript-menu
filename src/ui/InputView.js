const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../utils/constants/message');

const readLine = (text, callback) => {
  Console.readLine(text, callback);
};

const InputView = {
  readCoachNames(setCoachNames) {
    readLine(MESSAGE.INPUT.REQUEST_COACH_NAMES, setCoachNames);
  },

  readUnlikeMenu(name, setUnlikeMenu) {
    readLine(MESSAGE.INPUT.REQUEST_UNLIKE_MENUS(name), setUnlikeMenu);
  },
};

module.exports = InputView;
