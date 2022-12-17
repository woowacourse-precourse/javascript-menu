const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('./utils/constants');

const InputView = {
  readCoachName(callback) {
    Console.readLine(MESSAGES.GET_COACH_INPUT, (name) => {
      try {
        callback(name);
      } catch (e) {
        this.readCoachName(callback);
      }
    });
  },

  readDislikeMenu(name, callback) {
    Console.readLine(`${name}${MESSAGES.GET_DISLIKE_MENU}`, (menu) => {
      try {
        callback(menu);
      } catch (e) {
        this.readDislikeMenu(name, callback);
      }
    });
  },
};

module.exports = InputView;
