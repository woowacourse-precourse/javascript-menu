const { ERROR_MESSAGE, REG_EXP } = require("../constants");

class StringValidator {
  constructor(stringArr, type) {
    this.duplicationCheck(stringArr, type);
  }

  duplicationCheck(stringArr, type) {
    const stringSet = new Set(stringArr);
    if (stringArr.length !== stringSet.size)
      throw ERROR_MESSAGE[`${type}_DUPLICATION`];
    this.specialCharsCheck(stringArr, type);
  }

  specialCharsCheck(stringArr, type) {
    stringArr.forEach((string) => {
      if (REG_EXP.SPECIAL_CHARS_CHECK.test(string))
        throw ERROR_MESSAGE[`${type}_SPECIAL_CHARS`];
    });
  }
}

module.exports = StringValidator;
