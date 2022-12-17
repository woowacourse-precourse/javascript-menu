const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readInput(message, callback, validate) {
    Console.readLine(message, (input) => {
      try {
        validate(input);
        callback(input);
      } catch (error) {
        Console.print(error.message);
        InputView.readInput(message, callback, validate);
      }
    });
  },
};

module.exports = InputView;
