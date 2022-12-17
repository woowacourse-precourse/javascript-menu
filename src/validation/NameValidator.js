const { NAME_VALIDITY, ERROR_MESSAGE, REG_EXP } = require("../constants");

const { MAX_NAME_LENGTH, MIN_NAME_LENGTH, MAX_NAMES_COUNT, MIN_NAMES_COUNT } =
  NAME_VALIDITY;

class NameValidator {
  constructor(namesArr) {
    this.validateNameLength(namesArr);
  }

  validateNameLength(namesArr) {
    namesArr.forEach((name) => {
      const nameLength = name.length;
      if (nameLength < MIN_NAME_LENGTH || nameLength > MAX_NAME_LENGTH)
        throw ERROR_MESSAGE.NAME_LENGTH;
    });
    this.validateNamesCount(namesArr);
  }

  validateNamesCount(namesArr) {
    const namesCount = namesArr.length;
    if (namesCount < MIN_NAMES_COUNT || namesCount > MAX_NAMES_COUNT)
      throw ERROR_MESSAGE.NAME_COUNT;
    this.duplicationCheck(namesArr);
  }

  duplicationCheck(namesArr) {
    const nameSet = new Set(namesArr);
    if (namesArr.length !== nameSet.size) throw ERROR_MESSAGE.NAME_DUPLICATION;
    this.specialCharsCheck(namesArr);
  }

  specialCharsCheck(namesArr) {
    namesArr.forEach((name) => {
      if (REG_EXP.SPECIAL_CHARS_CHECK.test(name))
        throw ERROR_MESSAGE.NAME_SPECIAL_CHARS;
    });
  }
}

module.exports = NameValidator;
