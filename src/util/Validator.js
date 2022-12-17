const { ERROR_MESSAGE } = require("../constant/Constant");

const existInvalidNameLength = (names) => {
  return names.filter((name) => name.length < 2 || name.length > 4).length > 0;
};

const Validator = {
  checkReadCoachNames(coachNames) {
    const names = coachNames.split(",");

    if (names.length < 2) throw new Error(ERROR_MESSAGE.NAMES_MIN_LEN);
    if (names.length > 5) throw new Error(ERROR_MESSAGE.NAMES_MAX_LEN);
    if (existInvalidNameLength(names)) throw new Error(ERROR_MESSAGE.NAME_LEN);
  },

  checkReadNoEatMenu(noEatMenus) {
    const menus = noEatMenus.split(",");

    if (menus.length > 2) throw new Error(ERROR_MESSAGE.NO_EAT_MENU_MAX_LEN);
  },
};

module.exports = Validator;
