const { ERROR_MESSAGE } = require('./Constants');

const Validation = {
  checkNameLength(value) {
    if (2 <= value.length && value.length <= 4) return true;
  },

  checkCoachsRange(value) {
    if (2 <= value.length && value.length <= 5) return true;
  },

  checkMenuRange(value) {
    if (value.length < 3) return true;
  },

  checkCoachs(coachs) {
    if (!this.checkCoachsRange(coachs)) throw ERROR_MESSAGE.COACH_COUNT_ERROR;
    for (const coach of coachs) {
      if (!this.checkNameLength(coach)) throw ERROR_MESSAGE.COACH_NAME_ERROR;
    }
  },

  checkHateMenu(menus) {
    if (!this.checkMenuRange(menus)) throw ERROR_MESSAGE.HATE_MENU_COUNT_ERROR;
  },
};

module.exports = Validation;
