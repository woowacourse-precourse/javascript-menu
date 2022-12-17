const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readNames(callback) {
    MissionUtils.Console.readLine(
      "코치의 이름을 입력해 주세요. (, 로 구분)\n",
      (input) => {
        const namesArray = input.split(",");
        callback(namesArray);
      }
    );
  },

  readPickyMenu(name, callback) {
    MissionUtils.Console.readLine(
      "\n" + name + "(이)가 못 먹는 메뉴를 입력해 주세요.\n",
      (input) => {
        let menuArray = input.split(",");
        if (menuArray[0] == "") menuArray = [];
        callback(name, menuArray);
      }
    );
  },
};

module.exports = InputView;
