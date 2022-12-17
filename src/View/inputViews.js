const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachName(callback) {
    Console.readLine('코치의 이름을 입력해주세요\n', (answer) => {
      callback(answer);
    });
  },
};

module.exports = InputView;
