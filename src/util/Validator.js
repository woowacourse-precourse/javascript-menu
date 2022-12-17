const { ERROR_MESSAGE } = require("../constant/Constant");

const Validator = {
  checkReadCoachNames(coachNames) {
    const names = coachNames.split(",");

    if (names.length < 2) throw new Error(ERROR_MESSAGE.NAMES_MIN_LEN);
  },

  checkReadNoEatMenu(noEatMenus) {
    const menus = noEatMenus.split(",");

    if (menus.length > 2) throw new Error(ERROR_MESSAGE.NO_EAT_MENU_MAX_LEN);
  },
};

module.exports = Validator;
