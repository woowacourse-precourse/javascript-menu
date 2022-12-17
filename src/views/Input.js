const { Console } = require('@woowacourse/mission-utils');

const Input = {
  readCoachNameList(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', callback);
  },

  readHateMenuList(coachName, callback) {
    Console.readLine(
      `\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      callback
    );
  },
};

module.exports = Input;
