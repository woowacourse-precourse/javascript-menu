const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');

const InputView = {
  readCoachNames(readCoachNamesCallback) {
    Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)\n", (names) => {
      names = Validation.checkCoachNames(names);
      readCoachNamesCallback(names);
    })
  }
}

module.exports = InputView;