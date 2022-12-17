const MissionUtils = require('@woowacourse/mission-utils');
const LunchMenuError = require('./Error/LunchMenuError');

class LunchMenu {
  #totalMenu = [];

  // 코치의 이름
  #coach;

  // 카테고리들
  #categories = [];

  // 선택된 카테고리들
  #selectedCategory = [];

  // 각 코치마다 못먹는 음식
  #impossibleFoods = [];

  #currentCoach = 0;

  #makeMenu(sample) {
    for (const food in sample) {
      this.#categories.push(food);
      this.#totalMenu.push(sample[food].split(', '));
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
      this.#currentCoach = 0;
      this.#readImpossibleMenu();
    } catch {
      this.#readCoachNames();
    }
  };

  #readImpossibleMenu = () => {
    const name = this.#coach[this.#currentCoach];
    this.#currentCoach += 1;
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
      this.#impossibleFoods.push(impossibleMenu);
    } catch {
      this.#currentCoach -= 1;
    }
    this.#readImpossibleMenu();
  };

  #printRecommendMenu = () => {
    MissionUtils.Console.print('\n메뉴 추천 결과입니다.');
    MissionUtils.Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    this.#currentCoach = 0;
    this.#selectRecommendCategory();
  };

  #selectRecommendCategory = () => {
    // 코치 한명에 대한 카테고리를 선택한다.
    this.#selectedCategory = [0, 0, 0, 0, 0];
    for (let select = 0; select < 5; select += 1) {
      const selected = MissionUtils.Random.pickNumberInRange(1, 5);
      select += this.#selectCategoryHelper(selected);
    }
    // 선택한 카테고리로 메뉴를 선택하러 간다.
    this.#selectRecommendMenu();
  };

  #selectCategoryHelper = (selected) => {
    if (this.#selectedCategory[selected - 1] < 2) {
      this.#selectedCategory[selected - 1] += 1;
      return 0;
    }
    return -1;
  };

  #selectRecommendMenu = () => {
    // [1,1,1,1,1]
    // i는 카테고리, j는 음식의 개수
    const finalRecommend = [];
    for (let category = 0; category < 5; category += 1) {
      for (let food = 0; food < this.#selectedCategory[category]; food += 1) {
        const temp = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        const recommend = this.#totalMenu[category][MissionUtils.Random.shuffle(temp)[0]];
        if (this.#impossibleFoods[this.#currentCoach].includes(recommend)) {
          food -= 1;
          continue;
        }
        this.#impossibleFoods[this.#currentCoach].push(recommend);
        finalRecommend.push(recommend);
      }
    }
    let answer = `[ ${this.#coach[this.#currentCoach]} |`;
    for (let i = 0; i < 5; i += 1) {
      answer += ` ${finalRecommend[i]} `;
      if (i != 4) {
        answer += '|';
      }
    }

    answer += ']';
    MissionUtils.Console.print(answer);

    if (this.#currentCoach < this.#coach.length - 1) {
      this.#currentCoach += 1;
      this.#selectRecommendCategory();
    } else {
      this.#printComplete();
    }
  };

  #printComplete = () => {
    MissionUtils.Console.print('\n추천을 완료했습니다.');
    MissionUtils.Console.close();
  };
}

module.exports = LunchMenu;
