const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoachName(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)', (name) => {
      try {
        callback(name);
      } catch (e) {
        this.readCoachName(callback);
      }
    });
  },

  readDislikeMenu(name, callback) {
    Console.readLine(`${name}(이)가 못 먹는 메뉴를 입력해 주세요.`, (menu) => {
      try {
        callback(menu);
      } catch (e) {
        this.readDislikeMenu(name, callback);
      }
    });
  },
};

module.exports = InputView;
