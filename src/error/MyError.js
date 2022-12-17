const { ERROR } = require('../constants/Constants');

class MyError extends Error {
  constructor(message) {
    super(`${ERROR.prefix} ${message}`);
    this.name = this.constructor.name;
  }
}

module.exports = MyError;
