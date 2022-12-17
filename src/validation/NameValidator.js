const { NAME_VALIDITY, ERROR_MESSAGE } = require("../constants");
const StringValidator = require("./StringValidator");

const { MAX_NAME_LENGTH, MIN_NAME_LENGTH, MAX_NAMES_COUNT, MIN_NAMES_COUNT } =
  NAME_VALIDITY;
const NAME = "NAME";

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
    this.validateStrings(namesArr, NAME);
  }

  validateStrings(namesArr, type) {
    new StringValidator(namesArr, type);
  }
}

module.exports = NameValidator;
