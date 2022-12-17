const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  getName(callback) {
    Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)\n", callback);
  },

  getDislikeMenu(coachNames, callback) {
    for (let i = 0; i < coachNames.length; i++) {
      Console.readLine(
        `${coachNames[i]}(이)가 못 먹는 메뉴를 입력해 주세요.`,
        callback
      );
    }
  },
};

module.exports = InputView;
