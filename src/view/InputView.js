const { Console } = require('@woowacourse/mission-utils');
const { QUERY } = require('../constants/Strings');
const InputValidator = require('../utils/InputValidator');

const InputView = Object.freeze({
  readCoachNames(callback) {
    try {
      this.getUserInput(callback, QUERY.COACH_NAME, InputValidator.coachNames);
    } catch (err) {
      Console.print(err.message);
      this.readCoachNames(callback);
    }
  },

  readHateMenus(callback, coachName) {
    try {
      this.getUserInput(callback, coachName + QUERY.HATE_MENU, InputValidator.hateMenu);
    } catch (err) {
      Console.print(err.message);
      this.readHateMenus(callback, coachName);
    }
  },

  getUserInput(callback, query, validator) {
    Console.readLine(query, input => {
      validator(input);
      callback(input);
    });
  },
});

module.exports = InputView;
