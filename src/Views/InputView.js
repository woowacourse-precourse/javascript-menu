const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Constants');

const InputView = {
  readInput(message, callback) {
    Console.readLine(message, (input) => {
      try {
        callback(input);
      } catch (error) {
        Console.print(error);
        this.readInput(message, callback);
      }
    });
  },

  readCoachName(setCoaches) {
    this.readInput(MESSAGE.COACH_NAME, setCoaches);
  },
};

module.exports = InputView;
