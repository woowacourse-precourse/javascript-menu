const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachsName(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', (answer) => {
      try {
        callback(answer);
      } catch (e) {
        Console.print(e);
        this.readCoachsName(callback);
      }
    });
  },

  readHateMenu(callback, secondCallback, coachIndex, coachs) {
    Console.readLine(
      `${coachs[coachIndex]}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      (answer) => {
        try {
          callback(coachs[coachIndex], answer);
          coachIndex++;
          if (coachIndex === coachs.length) return secondCallback();
          return this.readHateMenu(
            callback,
            secondCallback,
            coachIndex,
            coachs
          );
        } catch (e) {
          Console.print(e);
          this.readHateMenu(callback, secondCallback, coachIndex, coachs);
        }
      }
    );
  },
};

module.exports = InputView;
