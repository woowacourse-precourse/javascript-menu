const { Console } = require('@woowacourse/mission-utils');

const validator = {
  coachValidate(input) {
    if (this.checkNameLength(input) && this.checkCoachNum(input)) return;
    throw Console.print(
      '[ERROR] 입력한 코치 이름 혹은 수가 올바르지 않습니다.'
    );
  },

  hateMenuValidate(menuArr) {
    function checkLength(menu) {
      return 0 <= menu.length && menu.length <= 2;
    }

    return menuArr.every(checkLength);
  },

  checkNameLength(names) {
    function checkLength(name) {
      return 2 <= name.length && name.length <= 4;
    }

    return names.every(checkLength);
  },

  checkCoachNum(names) {
    return 2 <= names.length && names.length <= 5;
  },
};

module.exports = validator;
