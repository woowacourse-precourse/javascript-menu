const MissionUtils = require('@woowacourse/mission-utils');
const LunchMenuError = require('./Error/LunchMenuError');

class LunchMenu {
  start() {
    const RECOMMEND_START = '점심 메뉴 추천을 시작합니다.\n';
    MissionUtils.Console.print(RECOMMEND_START);
    const INPUT_COATCH_NAMES = '코치의 이름을 입력해 주세요. (, 로 구분)\n';
    MissionUtils.Console.readLine(INPUT_COATCH_NAMES, this.coachNameInputHandler);
  }

  coachNameInputHandler(names) {
    try {
      const coachNames = names.split(',');
      LunchMenuError.isValidName(coachNames);
    } catch {

    }
  }
}

module.exports = LunchMenu;
