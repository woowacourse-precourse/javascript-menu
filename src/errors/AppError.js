class AppError extends Error {
  static PREFIX = '[ERROR]';

  /**
   * @param {string} message
   */
  constructor(message) {
    super(`${AppError.PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

module.exports = AppError;
