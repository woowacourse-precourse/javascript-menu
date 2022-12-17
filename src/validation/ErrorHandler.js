const View = require('../views/View');

const ErrorHandler = {
  throwError(error) {
    View.printError(error);
  },
};

module.exports = ErrorHandler;
