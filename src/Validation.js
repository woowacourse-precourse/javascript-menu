const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require("./constants/messages");

const Validation = {
  checkInputNameCount(names) {
    try {
      if (!(names.length >= 2 && names.length <= 5)) {
        throw new Error(ERROR.COUNT);
      }
    } catch (error) {
      Console.print(error.message);
      return false;
    }
    return true;
  },

  checkInputNameLength(nameLength) {
    try {
      if (!(nameLength >= 2 && nameLength <= 4)) {
        throw new Error(ERROR.LENGTH);
      }
    } catch (error) {
      Console.print(error.message);
      return false;
    }
    return true;
  },
};

module.exports = Validation;
