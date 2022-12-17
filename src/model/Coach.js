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

  getData() {
    return this.#names;
  }
}

module.exports = Coach;
