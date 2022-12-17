const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readNames(handleNames) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', handleNames);
  },

  readHates(handleHates, coach) {
    Console.readLine(`${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, handleHates);
  },

  close() {
    Console.close();
  },
};

module.exports = InputView;
