const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  Coach(callback) {
    Console.readLine('코치의 이름을 입력해 주세요.', callback);
  },
};

module.exports = InputView;
