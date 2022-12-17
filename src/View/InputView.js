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

  readPickyMenu(name, callback) {
    MissionUtils.Console.readLine(
      name + "(이)가 못 먹는 메뉴를 입력해 주세요.",
      (input) => {
        const menuArray = input.split(",");
        callback(menuArray);
      }
    );
  },
};

module.exports = InputView;
