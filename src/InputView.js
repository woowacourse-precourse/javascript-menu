const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachName(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)', (name) => {
      try {
        callback(name);
      } catch (e) {
        this.readCoachName(callback);
      }
    });
  },
};

module.exports = InputView;
