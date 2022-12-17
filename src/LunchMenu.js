const MissionUtils = require('@woowacourse/mission-utils');

class LunchMenu {
  start() {
    const RECOMMEND_START = '`점심 메뉴 추천을 시작합니다.\n`';
    MissionUtils.Console.print(RECOMMEND_START);
  }
}

module.exports = LunchMenu;
