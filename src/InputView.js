const Console = require('./utils/Console');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readUserName(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', name => {
      callback(name);
    });
  },

  readSelectMenu(name, callback) {
    Console.readLine(
      `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      menu => {
        callback(menu);
      }
    );
  },
};

module.exports = InputView;
