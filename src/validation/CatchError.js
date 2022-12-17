const Console = require('../utils/Console');
const userNameValid = require('./userNameValid');

const CatchError = {
  UserName(size) {
    if (!userNameValid(size)) {
      errorPrint(
        '[ERROR] 2명 이상 5명 이하의 이름을 ,로 구분하여 입력해야 합니다.'
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
