const MissionUtils = require('@woowacourse/mission-utils');

const LunchMenuError = {

  isValidCoachName(names) {
    if (names.length < 2 || names.length > 5) {
      MissionUtils.Console.print('\n[ERROR] 코치는 최소 2명 이상 입력해야 합니다.\n');
      throw new Error();
    }
    if (!this.isValidName(names)) {
      MissionUtils.Console.print('\n[ERROR] 코치의 이름은 최소 2글자, 최대 4글자여야 합니다.');
      throw new Error();
    }
  },

  isValidName(names) {
    let flag = true;
    names.forEach((name) => {
      const validName = name.length >= 2 && name.length <= 4;
      if (!validName) {
        flag = false;
      }
    });
    return flag;
  },
};

module.exports = LunchMenuError;
