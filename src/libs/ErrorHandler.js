const IOView = require('../views/IOView');

const ErrorHandler = {
  throwError(error) {
    IOView.printError(error);
  },
};

module.exports = ErrorHandler;
