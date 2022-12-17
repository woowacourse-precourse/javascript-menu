const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');

const InputView = {
  question(string, callback) {
    Console.readLine(string, (input) => {
      try {
        callback(input);
      } catch (error) {
        OutputView.printError(error);
        InputView.question(string, callback);
      }
    });
  },
};
