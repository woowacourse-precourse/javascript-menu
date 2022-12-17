const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachsName(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', (answer) => {
      callback(answer);
    });
  },

  readHateMenu(coachIndex, coachs, callback) {
    Console.readLine(
      `${coachs[coachIndex]}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      (answer) => {
        callback(coachs[coachIndex], answer);
        coachIndex++;
        if (coachIndex === coachs.length) return;
        return this.readHateMenu(coachIndex, coachs, callback);
      }
    );
  },
};

module.exports = InputView;
