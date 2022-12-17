const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoach(coachList) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', coachList);
  },
};

module.exports = InputView;