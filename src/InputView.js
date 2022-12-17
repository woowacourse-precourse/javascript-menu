const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachNames(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분),', callback);
  },
};
module.exports = InputView;
