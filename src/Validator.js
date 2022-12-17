const { REGEX } = require('./constant/Constant');

const Validator = {
  errorIfCoachNamesInvalid(coachNames) {
    if (!REGEX.IS_NAME_VALID.test(coachNames)) {
      throw Error();
    }
  },

  errorIfBanMenuInvalid(banMenu) {
    if (!REGEX.IS_BAN_MENU_VALID.test(banMenu)) {
      throw Error();
    }
  },
};

module.exports = Validator;
