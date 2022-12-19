const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoach(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', callback);
  },

  readNoEatFood(coach, callback) {
    Console.readLine(`${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, callback);
  }
};

module.exports = InputView;