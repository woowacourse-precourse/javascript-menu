const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readNames(callback) {
    MissionUtils.Console.readLine(
      "코치의 이름을 입력해 주세요. (, 로 구분)",
      (input) => {
        callback(input);
      }
    );
  },
};

module.exports = InputView;
