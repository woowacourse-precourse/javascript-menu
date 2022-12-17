const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachsName(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', (answer) => {
      callback(answer);
    });
  },
};

module.exports = InputView;
