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

  checkTypeOfArray(array) {
    if (!Array.isArray(array)) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },
};

module.exports = Validator;
