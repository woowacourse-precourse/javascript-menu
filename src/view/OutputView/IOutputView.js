const OverrideError = require('../../error/OverrideError');

const IOutputView = class {
  printError() {
    throw new OverrideError();
  }

  printOpening() {
    throw new OverrideError();
  }

  printRecommendMenu() {
    throw new OverrideError();
  }

  printClosing() {
    throw new OverrideError();
  }

  close() {
    throw new OverrideError();
  }
};

module.exports = IOutputView;
