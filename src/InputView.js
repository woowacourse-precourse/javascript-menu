const MissionUtils = require("@woowacourse/mission-utils");

const { TEXT } = require("./constant");

const InputView = {
  readCoachName(callback) {
    MissionUtils.Console.readLine(
      "코치의 이름을 입력해 주세요. (, 로 구분)\n",
      (name) => {
        callback(name);
      }
    );
  },
};

module.exports = InputView;
