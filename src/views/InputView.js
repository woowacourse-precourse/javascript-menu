const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachName(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)', callback);
  },

  readAntiFood(name, callback) {
    Console.readLine(`${name}(이)가 못 먹는 메뉴를 입력해 주세요.`, callback);
  },
};

module.exports = InputView;
