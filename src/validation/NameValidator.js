const { NAME_VALIDITY, ERROR_MESSAGE } = require("../constants");

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
  }
}

module.exports = NameValidator;

// 이름 글자수 최소 2, 최대 4
// 인원수 최소 2, 최대 5
