const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const MESSAGE = require('../constants/Message');

const InputView = {
  readCoachName(callback) {
    InputView.question(MESSAGE.process.inputCoachName, input => {
      const names = InputView.convertInputToItems(input);

      names.forEach(name => InputView.validateName(name));
      callback(names);
    });
  },

  readNotGoodFood(coach, callback) {
    InputView.question(`\n${coach.getName() + MESSAGE.process.inputNotGoodFood}`, input => {
      const foods = InputView.convertInputToItems(input);

      callback(foods);
    });
  },

  question(string, callback) {
    Console.readLine(string, input => {
      try {
        callback(input);
      } catch (error) {
        OutputView.printError(error);
        InputView.question(string, callback);
      }
    });
  },

  validateName(name) {
    if (name.length < 2 || name.length > 4) {
      throw new Error('이름은 최소 2글자, 최대 4글자여야 합니다.');
    }
  },

  convertInputToItems(input) {
    return input.split(',');
  },
};

module.exports = InputView;
