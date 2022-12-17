const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_COACHES_NAME: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
};

const InputView = {
  askCoachesName(callback) {
    Console.readLine(MESSAGE.ASK_COACHES_NAME, callback);
  },
};

module.exports = InputView;
