const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');

const InputView = {
  readCoachName() {
    Console.readLine(
      '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
      (names) => {
        const error = Validation.isValidInput(names);
        if (error) return this.readCoachName();
        Console.print(names);
      }
    );
  },
};

module.exports = InputView;
