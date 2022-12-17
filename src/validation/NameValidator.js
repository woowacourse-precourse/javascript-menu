const { NAME_VALIDITY, ERROR_MESSAGE } = require("../constants");

const { MAX_NAME_LENGTH, MIN_NAME_LENGTH, MAX_NAMES_COUNT, MIN_NAMES_COUNT } =
  NAME_VALIDITY;

class NameValidator {
  constructor(namesArr) {
    this.validateNameLength(namesArr);
    this.validateNamesCount(namesArr);
  }

  validateNameLength(namesArr) {
    namesArr.forEach((name) => {
      const nameLength = name.length;
      if (nameLength < MIN_NAME_LENGTH || nameLength > MAX_NAME_LENGTH)
        throw ERROR_MESSAGE.NAME_LENGTH;
    });
  }

  validateNamesCount(namesArr) {
    const namesCount = namesArr.length;
    if (namesCount < MIN_NAMES_COUNT || namesCount > MAX_NAMES_COUNT)
      throw ERROR_MESSAGE.NAME_COUNT;
  }
}

module.exports = NameValidator;
