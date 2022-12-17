const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');

const InputView = {
  COACH_NAMES: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',

  readCoachNames(callback) {
    InputView.question(InputView.COACH_NAMES, (input) => {
      const coachNames = input.split(',');

      callback(coachNames);
    });
  },

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

module.exports = InputView;
