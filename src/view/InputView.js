const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readCoachesName(fn) {
    MissionUtils.Console.readLine(
      "코치의 이름을 입력해 주세요. (, 로 구분)\n",
      (names) => {
        fn(names);
      }
    );
  },
};

module.exports = InputView;
