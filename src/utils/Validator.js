const { MESSAGE_ERROR } = require('../constants/messages');

const Validator = {
  checkTruthy(value) {
    if (!value) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkType(value, target) {
    if (typeof value !== typeof target) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkNameLength(name) {
    if (name.length < 2 || name > 4) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkHeadCount(heads) {
    if (heads.length < 2 || heads.length > 5) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },
};

module.exports = Validator;
