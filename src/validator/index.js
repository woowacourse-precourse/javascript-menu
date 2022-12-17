const { MENU, ERROR } = require("../constants/index");

const Validator = {
  checkNameCountValid(names) {
    const nameCountValid = 2 <= names.length && names.length <= 5;

    if (!nameCountValid) throw new Error(ERROR.NAME_COUNT);
  },

  checkNameLengthValid(names) {
    const nameLengthValid = names.every(
      (name) => 2 <= name.length && name.length <= 4
    );

    if (!nameLengthValid) throw new Error(ERROR.NAME_LENGTH);
  },

  checkDislikeCountValid(menus) {
    const dislikeCountValid = 0 <= menus.length && menus.length <= 2;

    if (!dislikeCountValid) throw new Error(ERROR.DISLIKE_COUNT);
  },

  checkDislikeMenuValid(menus) {
    const total = Object.values(MENU)
      .map((string) => string.split(", "))
      .flat();

    const dislikeMenuValid = menus.every((menu) => total.includes(menu));

    if (!dislikeMenuValid) throw new Error(ERROR.DISLIKE_MENU);
  },
};

module.exports = Validator;
