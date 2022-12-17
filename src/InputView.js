const { Console } = require('@woowacourse/mission-utils');
const { catchError } = require('./util');
const { checkCoachNames } = require('./Validation');

const InputView = {
  readCoachNames(readCoachNamesCallback) {
    Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)\n", (names) => {
      names = catchError(names, checkCoachNames)
      if (!names) return this.readCoachNames(readCoachNamesCallback);
    })
  }
}

module.exports = InputView;