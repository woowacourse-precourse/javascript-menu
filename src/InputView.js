const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readCoachNames(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', coachNames => callback(coachNames));
  },
};

module.exports = InputView;
