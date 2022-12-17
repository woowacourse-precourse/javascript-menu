const { ERROR_MESSAGE } = require('./Constants');

const Validation = {
  checkNameLength(value) {
    if (value.length < 2 || 4 < value.length) return true;
  },

  checkCountRange(value) {
    if (value.length < 2 || 5 < value.length) return true;
  },

  checkCoachs(coachs) {
    if (this.checkCountRange(coachs)) throw ERROR_MESSAGE.COACH_COUNT_ERROR;
    for (const coach of coachs) {
      if (this.checkNameLength(coach)) throw ERROR_MESSAGE.COACH_NAME_ERROR;
    }
  },
};

module.exports = Validation;
