const MissionUtils = require('@woowacourse/mission-utils');

const LunchMenuError = {

  isValidCoachName(names) {
    if (names.length < 2 || names.length > 5) {
      MissionUtils.Console.print('\n[ERROR] 코치는 최소 2명 이상 5명 이하로 입력해야 합니다.\n');
      throw new Error();
    }
    if (!this.isValidName(names)) {
      MissionUtils.Console.print('\n[ERROR] 코치의 이름은 최소 2글자, 최대 4글자여야 합니다.\n');
      throw new Error();
    }
  },

  isValidName(names) {
    let flag = true;
    names.forEach((name) => {
      const VALID_NAME = name.length >= 2 && name.length <= 4;
      if (!VALID_NAME) {
        flag = false;
      }
    });
    return flag;
  },

  isValidImpossibleMenu(impossibleMenu, totalMenu) {
    if (impossibleMenu.length > 3) {
      MissionUtils.Console.print('\n[ERROR] 최소 0개, 최대 2개의 메뉴를 선택해야 합니다.\n');
      throw new Error();
    }
    impossibleMenu.forEach((food) => {
      LunchMenuError.isValidImpossibleMenuName(food, totalMenu);
    });
  },

  isValidImpossibleMenuName(food, totalMenu) {
    let flag = false;
    for (const foods of totalMenu) {
      if (foods.includes(food)) {
        flag = true;
      }
    }
    if (!flag) {
      MissionUtils.Console.print('\n[ERROR] 유효하지 않은 메뉴를 입력하였습니다.\n');
      throw new Error();
    }
  },
};

module.exports = LunchMenuError;
