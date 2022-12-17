const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachNames(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', callback);
  },

  readNoMenu(name, callback) {
    Console.readLine(`${name}의 못 먹는 메뉴를 입력해주세요\n`, callback);
  },

  // readGameCommand(callback) {
  //   Console.readLine('message', callback);
  // },
};

module.exports = InputView;
