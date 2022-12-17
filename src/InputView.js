const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readCoachName(callback) {
    Console.readLine("\n코치의 이름을 입력해 주세요. (, 로 구분)\n", callback);
  },
};

module.exports = InputView;
