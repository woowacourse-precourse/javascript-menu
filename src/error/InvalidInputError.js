const ERROR_MESSAGE = require("./error.constants");

class InValidInputError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGE.ERROR_PREFIX} ${message}`);
  }
}
module.exports = InValidInputError;
