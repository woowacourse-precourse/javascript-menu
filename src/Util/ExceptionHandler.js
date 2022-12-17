const { ERROR } = require('./Constants');

const ExceptionHandler = (errorMessage) => {
  throw new Error(`${ERROR.PREFIX} ${errorMessage}`);
};

module.exports = ExceptionHandler;
