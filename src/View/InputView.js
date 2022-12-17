const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  getUserInput(question, callback, redirectInput) {
    Console.readLine(question, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err);
        redirectInput(callback);
      }
    });
  },

  readCoachesName(callback) {
    this.getUserInput(
      '코치의 이름을 입력해 주세요. (, 로 구분)\n',
      callback,
      this.readCoachesName.bind(this),
    );
  },

  readNotEatMenu(name, callback) {
    this.getUserInput(
      `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      callback,
      this.readNotEatMenu.bind(this),
    )
  },
};

module.exports = InputView;
