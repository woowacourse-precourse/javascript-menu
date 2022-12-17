const OverrideError = require('../../error/OverrideError');

const IInputView = class {
  readNames() {
    throw new OverrideError();
  }

  readHateMenus() {
    throw new OverrideError();
  }
};

module.exports = IInputView;
