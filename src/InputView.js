const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
    MESSAGE_INPUT_COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)',
    MESSAGE_INPUT_COACH_DISABLE_MENU: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
    readCoachName(callback) {
      Console.readLine(`${InputView.MESSAGE_INPUT_COACH_NAME}`, callback);
    },
    readCoachDisableMenu(name, callback) {
      Console.readLine(`${InputView.MESSAGE_INPUT_COACH_DISABLE_MENU(name)}`, callback);
    }
};

module.exports = InputView;
