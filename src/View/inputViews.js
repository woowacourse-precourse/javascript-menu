const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachName() {
    Console.readLine('코치의 이름을 입력해주세요', () => {
      Console.print('a');
    });
  },
};

module.exports = InputView;
