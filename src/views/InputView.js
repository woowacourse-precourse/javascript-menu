const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_COACHES_NAME: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  askNonEdibleMenus: (coachName) => `\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
};

const InputView = {
  askCoachesName(callback) {
    Console.readLine(MESSAGE.ASK_COACHES_NAME, callback);
  },

  askNonEdibleMenus(coachName, callback) {
    Console.readLine(MESSAGE.askNonEdibleMenus(coachName), callback);
  },
};

module.exports = InputView;
