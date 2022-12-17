const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_COACHES_NAME: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  askNonEdibleMenus: (coachName) => `\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
};

const InputView = {
  askCoachesName(callback) {
    Console.readLine(MESSAGE.ASK_COACHES_NAME, callback);
  },

  askNonEdibleMenus(coaches, callback) {
    const lastCoachName = coaches[coaches.length - 1];

    Console.readLine(MESSAGE.askNonEdibleMenus(coaches[0]), (menus) => {
      if (coaches[0] !== lastCoachName) {
        callback(menus);
        return this.askNonEdibleMenus(coaches.slice(1), callback);
      }
      return callback(menus);
    });
  },
};

module.exports = InputView;
