const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readCoachName(callback) {
    MissionUtils.Console.readLine(
      "코치의 이름을 입력해 주세요. (, 로 구분)\n",
      (names) => {
        callback(names);
      }
    );
  },

  readDislikeMenu(callback, coachs, count) {
    MissionUtils.Console.readLine(
      `${coachs[count]?.getName()}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      (menu) => {
        callback(menu);
      }
    );
  },
};

module.exports = InputView;
