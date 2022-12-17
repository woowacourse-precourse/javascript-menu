const { Console } = require('@woowacourse/mission-utils');
const { SPLITTER } = require('../settings');

const InputView = {
  MESSAGE: {
    coachName: `\n코치의 이름을 입력해 주세요. (${SPLITTER}로 구분)\n`,
    inedibleMenu: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
  },

  readInput(message, callback, validate) {
    Console.readLine(message, (input) => {
      try {
        callback(input);
      } catch (error) {
        Console.print(error.message);
        InputView.readInput(message, callback, validate);
      }
    });
  },

  readCoachName(callback) {
    InputView.readInput(InputView.MESSAGE.coachName, callback);
  },
};

module.exports = InputView;
