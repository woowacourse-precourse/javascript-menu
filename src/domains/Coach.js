const AppValidationError = require('../errors/AppValidationError');

class Coach {
  /** @type {string} */
  #name;

  /**
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
    this.#validate();
  }

  #validate() {
    if (this.#name.length < 2 || 4 < this.#name.length) {
      throw new AppValidationError('코치의 이름은 최소 2글자, 최대 4글자여야 합니다.');
    }
  }
}

module.exports = Coach;
