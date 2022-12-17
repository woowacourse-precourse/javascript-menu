const { ERROR_MESSAGE } = require('./Constants');

const Validation = {
  checkNameLength(value) {
    if (value.length < 2 || 4 < value.length) return true;
  },

  checkCoachName(name) {
    if (this.checkNameLength(name)) throw ERROR_MESSAGE.COACH_NAME_ERROR;
  },
};

module.exports = Validation;
