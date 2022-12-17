const InValidInputError = require("../error/InValidInputError");
const ERROR_MESSAGE = require("../error/error.constants");

class Coach {
  #names;

  constructor(names) {
    if (this.#isValidNames(names)) this.#names = names;
  }

  #baseValidate(condition, message) {
    console.log(condition);
    if (!condition) throw new InValidInputError(message);
    return true;
  }

  #isValidCoachNum(names) {
    return this.#baseValidate(
      names.length >= 2 && names.length <= 5,
      ERROR_MESSAGE.INVALID_COUCH_NUM
    );
  }
  #isValidCoachNameNum(names) {
    return this.#baseValidate(
      names.every((name) => name.length >= 2 && name.length <= 4),
      ERROR_MESSAGE.INVALID_COUCH_NAME
    );
  }

  getData() {
    return this.#names;
  }
}

module.exports = Coach;
