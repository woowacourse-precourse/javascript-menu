const MissionUtils = require('@woowacourse/mission-utils');
const LunchMenuError = require('./Error/LunchMenuError');

class LunchMenu {
  #totalMenu;

  #coach;

  #count = 0;

  #makeMenu(sample) {
    this.#totalMenu = sample;
    for (const food in this.#totalMenu) {
      this.#totalMenu[food] = this.#totalMenu[food].split(', ');
    }
  }

  start(sample) {
    this.#makeMenu(sample);
    const RECOMMEND_START = '점심 메뉴 추천을 시작합니다.\n';
    MissionUtils.Console.print(RECOMMEND_START);
    this.#readCoachNames();
  }

  #readCoachNames = () => {
    const INPUT_COATCH_NAMES = '코치의 이름을 입력해 주세요. (, 로 구분)\n';
    MissionUtils.Console.readLine(INPUT_COATCH_NAMES, this.#coachNameInputHandler);
  };

  #coachNameInputHandler = (names) => {
    try {
      this.#coach = names.split(',');
      LunchMenuError.isValidCoachName(this.#coach);
      this.#count = 0;
      this.#readImpossibleMenu();
    } catch {
      this.#readCoachNames();
    }
  };

  #readImpossibleMenu = () => {
    const name = this.#coach[this.#count];
    this.#count += 1;
    if (name === undefined) {
      this.#printRecommendMenu();
    } else {
      const INPUT_IMPOSSIBLE_MENU = `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
      MissionUtils.Console.readLine(INPUT_IMPOSSIBLE_MENU, this.#readImpossibleMenuHandler);
    }
  };

  #readImpossibleMenuHandler = (menu) => {
    try {
      const impossibleMenu = menu.split(',');
      LunchMenuError.isValidImpossibleMenu(impossibleMenu, this.#totalMenu);
      this.#readImpossibleMenu();
    } catch {
      this.#count -= 1;
      this.#readImpossibleMenu();
    }
  };

  #printRecommendMenu = () => {
    MissionUtils.Console.print('\n메뉴 추천 결과입니다.');
    MissionUtils.Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]\n');
  };
}

module.exports = LunchMenu;
