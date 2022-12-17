const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readLine(askMessage, callback) {
    Console.readLine(askMessage, callback);
  },

  readCoachName(callback) {
    this.readLine('코치의 이름을 입력해 주세요. (, 로 구분)', callback);
  },

  readCoachNotEat(name, callback) {
    this.readLine(`${name}(이)가 못 먹는 메뉴를 입력해 주세요.`, callback);
  },
};

module.exports = InputView;
