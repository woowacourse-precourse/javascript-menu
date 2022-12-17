const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 코치의 이름 목록을 입력받는다.
   * @param {function(string): void} callback 입력값을 전달할 콜백 함수
   */
  readCoachNames(callback) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', coachNames => callback(coachNames));
  },

  /**
   * 코치가 못 먹는 메뉴 목록을 입력받는다.
   * @param {string} coachName 코치의 이름
   * @param {function(string): void} callback 입력값을 전달할 콜백 함수
   */
  readHateMenus(coachName, callback) {
    Console.readLine(`${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, hateMenus => callback(hateMenus));
  },
};

module.exports = InputView;
