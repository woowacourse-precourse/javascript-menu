const Console = require('../utils/Console');
const menuValid = require('./menuValid');
const userNameValid = require('./userNameValid');

const CatchError = {
  userName(name) {
    if (!userNameValid(name)) {
      errorPrint(
        '[ERROR] 2명 이상 5명 이하의 이름을 ,로 구분하여 입력해야 합니다.'
      );
      return false;
    }

    return true;
  },

  selectMenu(SAMPLE, menu) {
    if (!menuValid(SAMPLE, menu)) {
      errorPrint(
        '[ERROR] 메뉴 리스트에 해당되는 메뉴를 ,로 구분하여 최소 0개 최대 2개 입력해야합니다.'
      );
      return false;
    }

    return true;
  },
};

function errorPrint(message) {
  try {
    throw new Error(message);
  } catch (message) {
    Console.print(message);
  }
}

module.exports = CatchError;
