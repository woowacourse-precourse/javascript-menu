class CustomError extends Error {
  #ERROR_MESSAGE_PREFIX = '[ERROR]';

  constructor(message) {
    super(`${this.#ERROR_MESSAGE_PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

module.exports = CustomError;
