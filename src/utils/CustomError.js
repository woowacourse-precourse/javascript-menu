class CustomError extends Error {
  static #ERROR_MESSAGE_BEGINNING = '[ERROR]';

  constructor(message) {
    super(`${CustomError.#ERROR_MESSAGE_BEGINNING} ${message}`);
    this.name = 'CustomError';
  }
}

module.exports = CustomError;
